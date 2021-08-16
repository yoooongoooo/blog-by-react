/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동 맛집', '파이썬독학'] );
  
  function 제목바꾸기(){        // 글제목이라는 state는 직접 수정할 수 없다. 그래서 복사본을 만들기로 한다.
    var newArray = [...글제목]; // 글제목이라는 state의 복사본을 만들어서 newArray라는 변수에 저장한다.
    newArray[0] = '여자코트 추천'; //newArray의 변수의 0번째 데이터를 여자코트추천으로 바꾼다.
    글제목변경( newArray ); // 그걸 글제목 변경함수를 이용하여 바꾼다.
  }

  let [따봉, 따봉변경] = useState(0);

  let [좋아요, 좋아요변경] = useState( [0, 0, 0] );

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">

      <div className="black-nav">
        <div> 개발 Blog </div>
      </div>

      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { let copy=[...좋아요]; copy[0]++; 좋아요변경(copy) } } >👍</span> { 좋아요[0] } </h3>
        <p> 2월 17일 발행 </p>
        <button onClick={ ()=>{ 제목바꾸기() } }> 수정버튼 </button>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[1] } <span onClick={ () => { let copy=[...좋아요]; copy[1]++; 좋아요변경(copy) } } >👍</span> { 좋아요[1] }</h3>
        <p> 2월 18일 발행 </p>
        <hr/>
      </div>
      
      <div className="list">
        <h3> { 글제목[2] } <span onClick={ () => { let copy=[...좋아요]; copy[2]++; 좋아요변경(copy) } } >👍</span> { 좋아요[2] } </h3>
        <p> 2월 19일 발행 </p>
        <hr/>
      </div>
    
<p> 이 이하로 반복문 </p>


      {/* 반복문 */}
      {
        글제목.map(function(a, b){
          return (
          <div className="list" key={b}> 
            <h3 onClick={ ()=>{ 누른제목변경(b) } }> {a}
              <span onClick={ () => { let copy=[...좋아요]; copy[b]++; 좋아요변경(copy) } } >👍</span> { 좋아요[b] }
            </h3>
            <p> 2월 18일 발행 </p>
            <hr/>
          </div>
          )
        })
      }


      <div className="publish">
        <input />
        <button> 저장 </button>
      </div>


      
      {입력값}
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> {/* value는 input에 입력된 값 */}


      {/* 모달 */}
      {/* <button onClick={ ()=>{ 누른제목변경(0) } }> 버튼1 </button>
      <button onClick={ ()=>{ 누른제목변경(1) } }> 버튼2 </button>
      <button onClick={ ()=>{ 누른제목변경(2) } }> 버튼3 </button> */}

      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫기 </button>   {/* 모달 열고닫는 버튼 */}

      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} > </Modal>      // Modal 컴포넌트, App의 자식 컴포넌트, Modal이라는 컴포넌트에 글제목이라는 어레이를 보내겠습니다.
        : null
      }

    </div>
  );
}


// 모달 컴포넌트
// 컴포넌트 이름은 대문자 시작.
function Modal(props){      //파라미터
  return (
    <div className="modal">
        <h2> { props.글제목[props.누른제목] } </h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
