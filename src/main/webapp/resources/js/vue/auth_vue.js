"user strict"
var auth_vue = auth_vue || {}
auth_vue = {
    login_head: x => {
        return '<head>' +
            '    <meta charset="utf-8">' +
            '    <meta name="robots" content="noindex, nofollow">' +
            '  <title>Our Team section using bootstrap 4 - Bootsnipp.com</title>' +
            '        <meta name="viewport" content="width=device-width, initial-scale=1">' +
            '    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">' +
            '    <style type="text/css">' +
            '    .row.heading h2 {' +
            '    color: #fff;' +
            '    font-size: 52.52px;' +
            '    line-height: 95px;' +
            '    font-weight: 400;' +
            '    text-align: center;' +
            '    margin: 0 0 40px;' +
            '    padding-bottom: 20px;' +
            '    text-transform: uppercase;' +
            '}' +
            'ul{' +
            '  margin:0;' +
            '  padding:0;' +
            '  list-style:none;' +
            '}' +
            '.heading.heading-icon {' +
            '    display: block;' +
            '}' +
            '.padding-lg {' +
            '  display: block;' +
            '  padding-top: 60px;' +
            '  padding-bottom: 60px;' +
            '}' +
            '.practice-area.padding-lg {' +
            '    padding-bottom: 55px;' +
            '    padding-top: 55px;' +
            '}' +
            '.practice-area .inner{ ' +
            '     border:1px solid #999999; ' +
            '   text-align:center; ' +
            '   margin-bottom:28px; ' +
            '   padding:40px 25px;' +
            '}' +
            '.our-webcoderskull .cnt-block:hover {' +
            '    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);' +
            '    border: 0;' +
            '}' +
            '.practice-area .inner h3{ ' +
            '    color:#3c3c3c; ' +
            '  font-size:24px; ' +
            '  font-weight:500;' +
            '  font-family: "Poppins", sans-serif;' +
            '  padding: 10px 0;' +
            '}' +
            '.practice-area .inner p{ ' +
            '    font-size:14px; ' +
            '  line-height:22px; ' +
            '  font-weight:400;' +
            '}' +
            '.practice-area .inner img{' +
            '  display:inline-block;' +
            '}' +
            'our-webcoderskull{' +
            '  background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;' +
            '  ' +
            '}' +
            '.our-webcoderskull .cnt-block{ ' +
            '   float:left; ' +
            '   width:100%; ' +
            '   background:#fff; ' +
            '   padding:30px 20px; ' +
            '   text-align:center; ' +
            '   border:2px solid #d5d5d5;' +
            '   margin: 0 0 28px;' +
            '}' +
            '.our-webcoderskull .cnt-block figure{' +
            '   width:148px; ' +
            '   height:148px; ' +
            '   border-radius:100%; ' +
            '   display:inline-block;' +
            '   margin-bottom: 15px;' +
            '}' +
            '.our-webcoderskull .cnt-block img{ ' +
            '   width:148px; ' +
            '   height:148px; ' +
            '   border-radius:100%; ' +
            '}' +
            '.our-webcoderskull .cnt-block h3{ ' +
            '   color:#2a2a2a; ' +
            '   font-size:20px; ' +
            '   font-weight:500; ' +
            '   padding:6px 0;' +
            '   text-transform:uppercase;' +
            '}' +
            '.our-webcoderskull .cnt-block h3 a{' +
            '  text-decoration:none;' +
            '  color:#2a2a2a;' +
            '}' +
            '.our-webcoderskull .cnt-block h3 a:hover{' +
            '  color:#337ab7;' +
            '}' +
            '.our-webcoderskull .cnt-block p{ ' +
            '   color:#2a2a2a; ' +
            '   font-size:13px; ' +
            '   line-height:20px; ' +
            '   font-weight:400;' +
            '}' +
            '.our-webcoderskull .cnt-block .follow-us{' +
            '  margin:20px 0 0;' +
            '}' +
            '.our-webcoderskull .cnt-block .follow-us li{ ' +
            '    display:inline-block; ' +
            '  width:auto; ' +
            '  margin:0 5px;' +
            '}' +
            '.our-webcoderskull .cnt-block .follow-us li .fa{ ' +
            '   font-size:24px; ' +
            '   color:#767676;' +
            '}' +
            '.our-webcoderskull .cnt-block .follow-us li .fa:hover{ ' +
            '   color:#025a8e;' +
            '}' +
            '.wrap {height: 100%;' +
            '  display: flex;' +
            '  align-items: center;' +
            '  justify-content: center;}' +
            '.button {width: 140px;' +
            '  height: 45px;' +
            '  font-family: Roboto, sans-serif;' +
            '  font-size: 11px;' +
            '  text-transform: uppercase;' +
            '  letter-spacing: 2.5px;' +
            '  font-weight: 500;' +
            '  color: #000;' +
            '  background-color: #fff;' +
            '  border: none;' +
            '  border-radius: 45px;' +
            '  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);' +
            '  transition: all 0.3s ease 0s;' +
            '  cursor: pointer;' +
            '  outline: none;}' +
            '.button:hover {' +
            '  background-color: #2EE59D;' +
            '  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);' +
            '  color: #fff;' +
            '  transform: translateY(-7px);}' +
            'body {background-image : url("http://www.joysf.com/files/attach/images/2705510/600/836/002/4661.jpg");' +
            'background-repeat : no-repeat;' +
            'background-size : cover;}' +
            '.blinking{-webkit-animation:blink 1.5s ease-in-out infinite alternate;' +
            '-moz-animation:blink 1.5s ease-in-out infinite alternate;' +
            'animation:blink 1.5s ease-in-out infinite alternate;}' +
            '@-webkit-keyframes blink{' +
            '0% {opacity:0;}' +
            '100% {opacity:1;}}' +
            '@-moz-keyframes blink{' +
            '0% {opacity:0;}' +
            '100% {opacity:1;}}' +
            '@keyframes blink{' +
            '0% {opacity:0;}' +
            '100% {opacity:1;}}' +
            '    </style>' +
            '    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>' +
            '    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>' +
            '    </script>' +
            '</head>'
    },
    login_body: x => {
        return '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">' +
            '<section class="our-webcoderskull padding-lg">' +
            '  <div id="main" class="container">' +
            '    <div class="row heading heading-icon" "style="justify-content: center;">' +
            '        <h2  class="image blinking">SHIP Crawling</h2>' +
            '    </div>' +
            '    <ul class="row">' +
            '      <li class="col-12 col-md-6 col-lg-3">' +
            '          <div class="cnt-block equal-hight" style="height: 349px;">' +
            '            <figure><img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Bugs%21_logo.jpg" class="img-responsive" alt=""></figure>' +
            '            <h3><a class="wrap" id="bugs" href="#"></a>' +
            '          </div>' +
            '      </li>' +
            '      <li class="col-12 col-md-6 col-lg-3">' +
            '          <div class="cnt-block equal-hight" style="height: 349px;">' +
            '            <figure><img src="http://mblogthumb2.phinf.naver.net/20160427_133/ppanppane_1461739914816xuEt4_PNG/cgv%2C%B8%DE%B0%A1%B9%DA%BD%BA_%B7%CE%B0%ED_%284%29.png?type=w2" class="img-responsive" alt=""></figure>' +
            '            <h3><a class="wrap" id="cgv" href="#"></a></h3>' +
            '          </div>' +
            '      </li>' +
            '      <li class="col-12 col-md-6 col-lg-3">' +
            '          <div class="cnt-block equal-hight" style="height: 349px;">' +
            '            <figure><img src="https://ssl.pstatic.net/dicimg/alldic/newImg/enkodict.png" class="img-responsive" alt=""></figure>' +
            '            <h3><a  class="wrap" id="eng" href="#"></a></h3>' +
            '          </div>' +
            '       </li>' +
            '      <li class="col-12 col-md-6 col-lg-3">' +
            '          <div class="cnt-block equal-hight" style="height: 349px;">' +
            '            <figure><img src="https://previews.123rf.com/images/aquir/aquir1405/aquir140500246/28667314-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EC%A4%80%EB%B9%84%EC%A4%91-%EB%B9%A8%EA%B0%84%EC%83%89-%EB%9D%BC%EC%9A%B4%EB%93%9C-%EC%A7%80%EC%A0%80%EB%B6%84%ED%95%9C-%EC%8A%A4%ED%83%AC%ED%94%84.jpg" class="img-responsive" alt=""></figure>' +
            '            <h3><a  class="wrap" id="ready" href="http://www.webcoderskull.com/"></a></h3>' +
            '          </div>' +
            '      </li>' +
            '    </ul>' +
            '  </div>' +
            '</section>'
    },
}