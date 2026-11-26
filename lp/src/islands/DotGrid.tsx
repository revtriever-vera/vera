import { useEffect, useRef, useState } from 'react';

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
// Grade de pontos discreta; uma onda lenta varia o brilho. Cor da marca, alfa baixo.
const FRAG = `precision mediump float;
uniform vec2 r;uniform float t;
void main(){
  vec2 g=gl_FragCoord.xy/22.0;
  vec2 c=fract(g)-.5;
  float d=length(c);
  float dot=smoothstep(.16,.08,d);
  vec2 uv=gl_FragCoord.xy/r;
  float wave=.5+.5*sin(uv.x*5.0+uv.y*3.0-t*.6);
  float fade=smoothstep(.0,.55,uv.y)*.9+.1;
  float a=dot*(.07+.12*wave)*(1.0-fade*.0)*smoothstep(1.0,.25,uv.y);
  gl_FragColor=vec4(.88,.25,.48,1.)*a;
}`;

// Entra depois do LCP (client:idle), pausa fora da tela e não monta com movimento reduzido.
export default function DotGrid() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: true });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(prog, 'r');
    const uT = gl.getUniformLocation(prog, 't');
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    let raf = 0;
    let visible = true;
    let last = 0;
    const start = performance.now();
    const frame = (now: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      if (now - last >= 33) {
        last = now;
        resize();
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(uR, canvas.width, canvas.height);
        gl.uniform1f(uT, (now - start) / 1000);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) kick();
    });
    io.observe(canvas);
    document.addEventListener('visibilitychange', kick);
    kick();
    setOn(true);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', kick);
      if (raf) cancelAnimationFrame(raf);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return <canvas ref={ref} className={on ? 'dotgrid on' : 'dotgrid'} aria-hidden="true" />;
}
