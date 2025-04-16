import React, { useRef, useState, useEffect } from "react";
import "./DrawingBoard.css"; // 匯入CSS樣式

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(20);
  const [brushColor, setBrushColor] = useState("#000000");
  const [mousePos, setMousePos] = useState({ x: undefined, y: undefined });

  useEffect(() => {
    //初始化 Canvas 畫布設定
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRef.current = ctx;
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setMousePos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const finishDrawing = () => {
    setIsDrawing(false);
    setMousePos({ x: undefined, y: undefined });
  };
  //畫畫中
  const draw = (e) => {
    if (!isDrawing) return;
    const x2 = e.nativeEvent.offsetX;
    const y2 = e.nativeEvent.offsetY;

    drawCircle(x2, y2);
    drawLine(mousePos.x, mousePos.y, x2, y2);
    setMousePos({ x: x2, y: y2 });
  };

  const drawCircle = (x, y) => {
    ctxRef.current.beginPath();
    ctxRef.current.arc(x, y, brushSize, 0, Math.PI * 2);
    ctxRef.current.fillStyle = brushColor;
    ctxRef.current.fill();
  };

  const drawLine = (x1, y1, x2, y2) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x1, y1);
    ctxRef.current.lineTo(x2, y2);
    ctxRef.current.strokeStyle = brushColor;
    ctxRef.current.lineWidth = brushSize * 2;
    ctxRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  const increaseSize = () => {
    setBrushSize((prev) => (prev < 50 ? prev + 1 : 50));
  };

  const decreaseSize = () => {
    setBrushSize((prev) => (prev > 5 ? prev - 1 : 5));
  };

  return (
    <div className="wrapper">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={finishDrawing}
        onMouseLeave={finishDrawing}
        className="canvas"
      ></canvas>

      <div className="toolBox">
        <button onClick={decreaseSize}>-</button>
        <span>{brushSize}</span>
        <button onClick={increaseSize}>+</button>
        <input
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />
        <button onClick={clearCanvas} className="clearBtn">X</button>
      </div>
    </div>
  );
};

export default DrawingBoard;
