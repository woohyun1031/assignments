ball.onmousedown = function (event) {
  //여기서 ball이 어떻게 module로 정의됐는지...
  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = "absolute";
  ball.style.zIndex = 1000;

  // 현재 위치한 부모에서 body로 직접 이동하여
  // body를 기준으로 위치를 지정합니다.
  document.body.append(ball);

  // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + "px";
    ball.style.top = pageY - shiftY + "px";
  }

  // 포인터 아래로 공을 이동시킵니다.
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  //mousemove로 공을 움직입니다.
  document.addEventListener("mousemove", onMouseMove);

  //공을 드롭하고, 불필요한 핸들러를 제거합니다.
  ball.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    ball.onmouseup = null;
  };

  ball.ondragstart = function () {
    return false;
  };
};
