
        // 스크롤 시 opacity 효과//
        $(document).ready(function () {
            $(window).scroll(function () {
                $('#sec_box').css("opacity", 0 + $(window).scrollTop() / 800)
                $('.video_box').css("opacity", 3.3 - $(window).scrollTop() / 1500)
            })
        });


        //프로젝트 슬라이드 효과//

        $(function () {

            $('.text').click(function () {
                var index = $(this).index();
                $('.port_box').eq(index).css({ transform: 'translate(0)' },);
                $('.port_box_left').css('backdrop-filter','blur(5px)');
                $('.next').click(function () {
                    index++;
                    if (index > 4) {
                        index = 4;
                    }
                    $('.port_box').css({ transform: 'translate(-100%)' });
                    $('.port_box').eq(index).css({ transform: 'translate(0)' });
                    $('.css').css('display', 'none');
                $('.js').css('display', 'none');
                $('.html').css('display', 'block');
                });
                $('.prev').click(function () {
                    index--;
                    if (index < 0) {
                        index = 0;
                    }
                    $('.port_box').css({ transform: 'translate(-100%)' });
                    $('.port_box').eq(index).css({ transform: 'translate(0)' });
                    $('.css').css('display', 'none');
                $('.js').css('display', 'none');
                $('.html').css('display', 'block');
                
                });
            });


            $('.close').click(function () {
                $('.port_box').css({ transform: 'translate(-100%)' });
                $('.css').css('display', 'none');
                $('.js').css('display', 'none');
                $('.html').css('display', 'block');
                $('.port_box_left').css('backdrop-filter','blur(0px)');
            });
        });

        //tv 안으로 들어가는 효과//
        window.addEventListener("scroll", function () {
            var scroll11 = window.scrollY;
            // console.log(scroll11);
            var bg = document.getElementById('sec_box');
            var about=document.querySelectorAll('.pola2');

            if (scroll11 > 3461) { bg.classList.add('sc1') } else {
                bg.classList.remove('sc1');
            };

            if (scroll11 > 3517) { bg.classList.add('sc2') } else {
                bg.classList.remove('sc2');
            };
            if (scroll11 > 3617) { bg.classList.add('sc3') } else {
                bg.classList.remove('sc3');
            };
            if (scroll11 > 3817) { bg.classList.add('sc4') } else {
                bg.classList.remove('sc4');
            };
            if (scroll11 > 4017) { bg.classList.add('sc5') } else {
                bg.classList.remove('sc5');
            };
            if (scroll11 > 4117) { bg.classList.add('sc6') } else {
                bg.classList.remove('sc6');
            };
            if (scroll11 > 4217) { bg.style.display = 'none' } else {
                bg.style.display = 'block'
            };
            if(scroll11>4326){about[0].style.transform = 'translateX(0)'}else{
                about[0].style.transform='translateX(720px)'
            }
            if(scroll11>4326){about[1].style.transform = 'translateX(0)'}else{
                about[1].style.transform='translateX(400px)'
            }
            if(scroll11>4326){about[2].style.transform = 'translateX(0)'}else{
                about[2].style.transform='translateX(-400px)'
            }
            if(scroll11>4426){about[3].style.transform = 'translateX(0)'}else{
                about[3].style.transform='translateX(-720px)'
            }
            console.log(scroll11);
        });

        //vue 전역변수//
        Vue.component('section_com', {
            template:
                `<div class="port_box">
                    <div class="port_box_right">
                     <div class='page'>  
                       <div class="music">
                        <img src="#" alt="#" class="image">
                        <img src="#" alt="#" class="image1">
                        </div>
                       <div class="music1">
                        
                        </div>
                    </div>
                    </div>
                    <div class="port_box_left">
                        <div class="left_box">
                            <h1></h1>
                            <div class="button">
                                <a href="#" target="_blank">open website</a>
                                <div class="circle"></div>
                                <a href="#" class="circle2" target="_blank">
                                    <img src="img/ar.png" alt="#"></a>
                            </div>
                            <P>HTML과 CSS를 배우며 처음 만든 페이지이며<br>
                                여러가지 악기들과 LP를 판매하는 사이트입니다.</P>
                                <div class="block_box">
                               <a href="#" class='block3' target="_blank"> <div class='block block0'>MAIN</div></a>
                               <a href="#" class='block4' target="_blank"><div class='block block1'>SUB</div></a>
                               <a href="#" class='block5' target="_blank"><div class='block block2'>SUB2</div></a>
                                </div>
                            <div class="code_box">
                                <p>메인페이지의 배너부분의 코드입니다.</p>
                                <div class="code_menu">
                                    <ul>
                                        <li class="ht">HTML</li>
                                        <li class="cs">CSS</li>
                                        <li class='jj'>JS</li>
                                    </ul>
                                    </div>
                                <div class="html">
                                </div>
                                <div class='css'>
                                </div>
                                <div class="js">
                                </div>
                                
                            </div>
                        </div>
                       
                        <div class="left_box">
                            <div class="next"><span>next</span></div>
                            <div class="prev"><span>prev</span></div>
                            <div class="close"><span>close</span></div>
                        </div>
                    </div>
                </div>`

        });
        new Vue({
            el: 'section'
        });

        Vue.component('shootingstar', {
            template: `    <div class="shootingStarContainer">
                <div class="shootingStar"></div>
                <div class="shootingStar"></div>
                <div class="shootingStar"></div>
                <div class="shootingStar"></div>
                <div class="shootingStar"></div>
                <div class="shootingStar"></div>
                <div class="shootingStar"></div>
                <div class="shootingStar"></div>
                <div class="shootingStar"></div>
                <div class="shootingStar"></div>
            </div>`
        });
        new Vue({
            el: '.main'
        });

        //프로젝트 코드,이미지, 링크//
        var img1 = document.querySelectorAll('.image');
        var img2 = document.querySelectorAll('.image1');
        var h1 = document.querySelectorAll('.left_box>h1');
        var p = document.querySelectorAll('.left_box>p');
        var p1 = document.querySelectorAll('.code_box>p');
        var code = document.querySelectorAll('.html');
        var code2 = document.querySelectorAll('.css');
        var code3 = document.querySelectorAll('.js');
        var li = document.querySelectorAll('.code_box>li');
        var link = document.querySelectorAll('.button>a');
        var link2 = document.querySelectorAll('.circle2');
        var js = document.querySelectorAll('.jj');
        var block2 = document.querySelectorAll('.block2');
        var block1 = document.querySelectorAll('.block1');
        var main = document.querySelectorAll('.block3');
        var sub1 = document.querySelectorAll('.block4');
        var sub2 = document.querySelectorAll('.block5');
        var arr=['https://happy741.github.io/project1/','https://happy741.github.io/project2/','https://happy741.github.io/project3/','https://happy741.github.io/project4/index2.html','https://happy741.github.io/project5/'];
        var arr2=['https://happy741.github.io/project1/sub.html','https://happy741.github.io/project2/sub.html','https://happy741.github.io/project3/sub1.html','https://happy741.github.io/project5/sub.html'];
        // https://happy741.github.io/project3/sub2.html
        block2[2].style.opacity = '1';
        block1[3].style.opacity = '0';
        js[0].style.display = 'none';
        img1[0].src = 'img/musicon.jpg';
        img1[1].src = 'img/urban.jpg';
        img2[1].src = 'img/urban1.jpg';
        img1[2].src = 'img/q1.jpg';
        img2[2].src = 'img/q2.jpg';
        img1[3].src = 'img/poke1.jpg';
        img2[3].src = 'img/poke2.jpg';
        img1[4].src = 'img/b1.jpg';
        img2[4].src = 'img/b2.jpg';
        link[1].href = arr[0];
        link2[1].href = arr[1];
        link2[3].href= arr[3];
        link[2].href = 'https://happy741.github.io/project3/';
        link2[2].href = 'https://happy741.github.io/project3/';
        link[4].href = 'https://happy741.github.io/project5/';
        link2[4].href = 'https://happy741.github.io/project5/';

        main[0].href=arr[0];
        main[1].href=arr[1];
        main[2].href=arr[2];
        main[3].href=arr[3];
        main[4].href=arr[4];

        sub1[0].href=arr2[0];
        sub1[1].href=arr2[1];
        sub1[2].href=arr2[2];
        sub1[4].href=arr2[3];
        sub2[2].href="https://happy741.github.io/project3/sub2.html";
        

        h1[0].innerText = 'MUSICON'
        code[0].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=auto&width=680&ds=true&dsyoff=41px&dsblur=52px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520id%253D%2522new%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ch1%253ENEW%2520ARRIWALS%2520%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522strap%2520m1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522sub.html%2522%253E%2520%253Cimg%2520src%253D%2522img%252Fstrap.png%2522%2520alt%253D%2522strap%2522%253E%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522line1%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522line2%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522line3%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522line4%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522app%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522sub.html%2522%253E%2520%253Cimg%2520src%253D%2522img%252Fl.png%2522%2520alt%253D%2522lecord%2522%253E%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522strap%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522sub.html%2522%253E%2520%253Cimg%2520src%253D%2522img%252Fp.png%2522%2520alt%253D%2522pick%2522%253E%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522line1%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522line2%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522line3%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522line4%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522app%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522sub.html%2522%253E%2520%253Cimg%2520src%253D%2522img%252Fapp.png%2522%2520alt%253D%2522app%2522%253E%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E"
  style=border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code2[0].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=css&width=&ds=false&dsyoff=76px&dsblur=63px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=165%25&si=false&es=2x&wm=false&code=.m1%2520.line1%257Bwidth%253A%2520590px%253B%2520height%253A%25203px%253B%2520background-color%253A%2520%2523fff%253B%2520position%253A%2520relative%253B%2520bottom%253A20px%253B%2520left%253A4px%253B%2520opacity%253A0%253B%2520visibility%253A%2520visible%253B%257D%250A%2520.m1%2520.line2%257Bwidth%253A%25203px%253B%2520height%253A%2520405px%253B%2520background-color%253A%2520%2523fff%253B%2520position%253A%2520relative%253B%2520bottom%253A420px%253B%2520left%253A10px%253B%2520opacity%253A0%253B%2520visibility%253A%2520visible%253B%257D%250A%2520.m1%2520.line3%257Bwidth%253A%2520590px%253B%2520height%253A%25203px%253B%2520background-color%253A%2520%2523fff%253B%2520position%253A%2520relative%253B%2520bottom%253A815px%253B%2520left%253A4px%253B%2520opacity%253A0%253B%2520visibility%253A%2520visible%253B%257D%250A%2520.m1%2520.line4%257Bwidth%253A%25203px%253B%2520height%253A%2520405px%253B%2520background-color%253A%2520%2523fff%253B%2520position%253A%2520relative%253B%2520bottom%253A827px%253B%2520left%253A580px%253B%2520opacity%253A0%253B%2520visibility%253A%2520visible%253B%257D%250A%250A%2520.m1%253Ahover%2520.line1%257Bopacity%253A%25201%253B%2520visibility%253A%2520visible%253B%2520transition%253A%2520%2520all%25200.3s%2520ease-in-out%253B%257D%250A%2520.m1%253Ahover%2520.line2%257Bopacity%253A%25201%253B%2520visibility%253A%2520visible%253B%2520transition%253A%2520%2520all%25200.3s%2520ease-in-out%253B%257D%250A%2520.m1%253Ahover%2520.line3%257Bopacity%253A%25201%253B%2520visibility%253A%2520visible%253B%2520transition%253A%2520%2520all%25200.3s%2520ease-in-out%253B%257D%250A%2520.m1%253Ahover%2520.line4%257Bopacity%253A%25201%253B%2520visibility%253A%2520visible%253B%2520transition%253A%2520%2520all%25200.3s%2520ease-in-out%253B%257D%250A%250A%2520.m1%253Ahover%257Bopacity%253A%25200.8%253B%2520transition%253A%2520all%25200.3s%2520ease-in-out%253B%257D%250A%250A%2520%2523main%2520.app%257Bwidth%253A610px%253B%2520height%253A250px%253B%2520%2520float%253A%2520right%253B%2520margin%253A0%252010px%25200%25200%253B%257D%250A%2520%2523app%257Bwidth%253A605px%253B%2520height%253A250px%253B%2520%2520float%253A%2520left%253Bmargin%253A%25200%25200%25200%252011px%253B%257D%250A%2520%2523app%2520a%253Ahover%2520img%257B%2520transform%253A%2520scale%281.1%29%253B%257D%250A%2520%2523app%2520a%257Bdisplay%253A%2520block%253B%2520width%253A%2520100%2525%253B%2520height%253A%2520100%2525%253B%2520overflow%253A%2520hidden%253B%257D"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code[1].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=css&width=&ds=false&dsyoff=76px&dsblur=63px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=165%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522art_ul%2522%253E%250A%2520%2520%253Cul%2520class%253D%2522slide%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cli%2520id%253D%2522li_volume%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art_text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Eand%2520saled%2520volume%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522bar%2522%253E%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253E%25EC%259A%25B0%25EB%25A6%25AC%25EB%258A%2594%2520%25EC%2586%258C%25EB%25B9%2584%25EC%259E%2590%25EA%25B0%2580%2520%25EC%259B%2590%25ED%2595%2598%25EB%258A%2594%2520%25EB%2582%25B4%25EC%259A%25A9%25EC%259D%2584%2520%25EB%25A7%258C%25EB%2593%25A4%25EA%25B3%25A0%252C%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253E%25EA%25B7%25B8%2520%25EB%2582%25B4%25EC%259A%25A9%25EC%259D%2584%2520%25ED%2586%25B5%25ED%2595%25B4%2520%25ED%2581%25B4%25EB%259D%25BC%25EC%259D%25B4%25EC%2596%25B8%25ED%258A%25B8%25EC%259D%2598%2520%25EB%25A7%25A4%25EC%25B6%259C%25EC%259D%2584%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%25EC%25B4%2589%25EC%25A7%2584%25EC%258B%259C%25ED%2582%25AC%2520%25EC%2588%2598%2520%25EC%259E%2588%25EB%258F%2584%25EB%25A1%259D%2520%25ED%2595%25A9%25EB%258B%2588%25EB%258B%25A4.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art_circle%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522circle1%2522%253ECLIENT%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522circle2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522sub_img%252Fhand.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25EC%259E%2587%25EB%258B%25A4%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522circle3%2522%253ECUSTOMER%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cli%2520id%253D%2522li_why%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art_text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25EA%25B3%25A0%25EA%25B0%259D%25EC%259D%2598%2520%25EB%2588%2588%25EC%259C%25BC%25EB%25A1%259C%2520%25EB%25B3%25B4%25EB%258B%25A4%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522bar%2522%253E%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253E%25EC%2597%25AC%25EB%259F%25AC%25EB%25B6%2584%25EC%259D%2598%2520%25EB%25B9%259B%25EB%2582%2598%25EB%258A%2594%2520%25EC%25A0%259C%25ED%2592%2588%25EC%259D%25B4%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253E%25EC%2586%258C%25EB%25B9%2584%25EC%259E%2590%25EB%2593%25A4%25EC%2597%2590%25EA%25B2%258C%2520%25EC%25B9%259C%25EC%2588%2599%25ED%2595%2598%25EA%25B2%258C%2520%25EB%258B%25A4%25EA%25B0%2580%25EA%25B0%2588%2520%25EC%2588%2598%2520%25EC%259E%2588%25EB%258F%2584%25EB%25A1%259D%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%25EC%25B5%259C%25EA%25B3%25A0%25EC%259D%2598%2520%25EC%25BB%25A8%25ED%2585%2590%25EC%25B8%25A0%253C%252Fspan%253E%2520%25EB%25A5%25BC%2520%25EC%25A0%259C%25EC%259E%2591%25ED%2595%2598%25EC%2584%25B8%25EC%259A%2594.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522why_box%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522why%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522sub_img%252Fwhy.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EWHY%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CP%253E%25EC%2599%259C%2520%25EC%259A%25B0%25EB%25A6%25AC%2520%25EC%25A0%259C%25ED%2592%2588%25EC%259D%2584%253C%252FP%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CP%253E%2520%25EC%2584%25A0%25ED%2583%259D%25ED%2595%25B4%25EC%2595%25BC%2520%25ED%2595%2598%25EB%258A%2594%25EC%25A7%2580%253C%252FP%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522why%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522sub_img%252Fba.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EWHAT%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CP%253E%25EB%25AC%25B4%25EC%2597%2587%25EC%259D%25B4%2520%25EC%25A2%258B%25EC%259D%2580%25EC%25A7%2580%253C%252FP%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522why%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522sub_img%252Fhow.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EHOW%2520TO%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CP%253E%25EC%2596%25B4%25EB%2596%25BB%25EA%25B2%258C%2520%25EC%2582%25AC%25EC%259A%25A9%25ED%2595%25B4%25EC%2595%25BC%2520%25ED%2595%2598%25EB%258A%2594%25EC%25A7%2580%253C%252FP%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522why%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522sub_img%252Fre.png%2522%2520alt%253D%2522%2522%2520id%253D%2522star%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EAND%2520D%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CP%253E%25EC%259A%25B0%25EB%25A6%25AC%25EC%259D%2598%2520%25EC%25BB%25A8%25ED%2585%2590%25EC%25B8%25A0%25EA%25B0%2580%2520%25EC%2586%258C%25EB%25B9%2584%25EC%259E%2590%25EC%259D%2598%253C%252FP%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CP%253E%25EA%25B0%2590%25EC%2584%25B1%25EC%259D%2584%2520%25EC%259E%2590%25EA%25B7%25B9%25ED%2595%25A0%2520%25EC%2588%2598%2520%25EC%259E%2588%25EB%258F%2584%25EB%25A1%259D%253C%252FP%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CP%253E%25EC%259E%2598%2520%25EC%25A0%2595%25EB%25A6%25AC%25EB%2590%2598%25EC%2596%25B4%2520%25EC%259E%2588%25EB%258A%2594%25EC%25A7%2580%253C%252FP%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%253C%252Ful%253E%250A%250A%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522art_radio%2522%253E%250A%2520%2520%253Ca%2520href%253D%2522%2523111%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522prev%2522%253E%253C%252Fdiv%253E%250A%2520%2520%253C%252Fa%253E%250A%2520%2520%253Cdiv%2520id%253D%2522next%2522%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code2[1].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=css&width=&ds=false&dsyoff=76px&dsblur=63px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=165%25&si=false&es=2x&wm=false&code=article%257Bwidth%253A100%2525%253B%2520height%253A%2520750px%253Bmargin%253A0%2520auto%253B%2520background-color%253A%2520%2523111%253B%2520background-image%253A%2520url%28..%252Fsub_img%252Fback.jpg%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520background-size%253A%2520cover%253B%250A%2520%2520%2520%2520display%253A%2520flex%253B%2520align-items%253A%2520center%253B%2520flex-direction%253A%2520column%253B%2520color%253Awhite%253B%2520border%253A1px%257D%250A%2520%2520%2520%2520.art_text%257Bwidth%253A100%2525%253B%2520height%253A%2520300px%253B%2520%253B%250A%2520%2520%2520%2520display%253A%2520flex%253B%2520flex-direction%253A%2520column%253B%2520align-items%253A%2520center%253B%2520justify-content%253A%2520center%253B%257D%250A%2520%2520%2520%2520.art_text%2520p%257Bfont-size%253A%252018px%253B%257D%250A%2520%2520%2520%2520.art_text%2520h1%257Bwidth%253A500px%253B%2520height%253A%252050px%253B%2520text-align%253A%2520center%253B%257D%250A%2520%2520%2520%2520.art_text%2520span%257Bcolor%253A%2523fbc22c%257D%250A%2520%2520%2520%2520.bar%257Bwidth%253A30px%253B%2520height%253A%25202px%253B%2520background-color%253A%2520%2523fbc22c%253B%2520margin%253A15px%25200%253B%257D%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520.art_radio%257BwidtH%253A100px%253B%2520height%253A%252050px%253B%2520display%253Aflex%253B%2520justify-content%253A%2520center%253B%257D%250A%2520%2520%2520%2520%2523prev%2520%257Bwidth%253A12px%253B%2520height%253A%252012px%253B%2520border-radius%253A%252050%2525%253B%2520border%253Anone%253B%2520margin%253A5%2525%253B%2520background-color%253A%2523fbc22c%257D%250A%2520%2520%2520%2520%2523next%257Bwidth%253A12px%253B%2520height%253A%252012px%253B%2520border-radius%253A%252050%2525%253B%2520border%253Anone%253B%2520margin%253A1%2525%25200%25200%252010%2525%253B%2520background-color%253Awhite%253B%257D%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%2523prev%253Afocus%2520article%2520%257Bheight%253A715px%253B%257D%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520.art_ul%257Bwidth%253A850px%253B%2520height%253A%25201600px%253B%2520%2520overflow%253A%2520hidden%253B%2520%257D%250A%2520%2520%2520%2520.art_ul%2520ul%257Bwidth%253A1770px%253B%2520height%253A%2520685px%253B%2520%2520float%253A%2520left%253B%257D%250A%2520%2520%2520%2520.art_ul%2520li%257Bwidth%253A800px%253B%2520height%253A%25201500px%253B%2520%2520margin%253A2%2525%253B%2520float%253Aleft%253B%2520%257D%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%2523li_why%257Bdisplay%253A%2520flex%253B%2520flex-direction%253A%2520column%253B%2520align-items%253A%2520center%253B%257D%250A%2520%2520%2520%2520.why_box%257Bwidth%253A100%2525%253B%2520height%253A1500px%253B%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520display%253A%2520flex%253B%2520flex-direction%253A%2520column%253B%2520align-items%253A%2520center%253B%257D%250A%2520%2520%2520%2520.why%257Bwidth%253A55%2525%253B%2520height%253A%252040%2525%253B%2520background-color%253A%2520rgb%28255%252C%2520255%252C%2520255%29%253B%2520display%253A%2520flex%253B%2520color%253A%2523000%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520justify-content%253A%2520center%253B%2520align-items%253A%2520center%253B%2520flex-direction%253A%2520column%253B%2520transition%253A0.5s%2520ease%253B%250A%2520%2520%2520%2520margin-top%253A%25205%2525%253B%257D%250A%2520%2520%2520%2520.why%2520p%257Bfont-size%253A%252013px%253B%257D%250A%2520%2520%2520%2520.why%2520img%257Bmargin%253A3%2525%253B%257D%250A%2520%2520%2520%2520.why%253Ahover%257Bbackground-color%253A%2520%2523fbc22c%253B%2520transform%253A%2520translateY%28-10px%29%253B%257D%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%2523li_volume%257Bdisplay%253A%2520flex%253B%2520flex-direction%253A%2520column%253B%2520align-items%253A%2520center%253B%257D%250A%2520%2520%2520%2520%2523li_volume%2520h1%257B%2520font-size%253A%252020px%253B%257D%250A%250A%2520%2520%2520%2520.art_circle%257Bwidth%253A45%2525%253B%2520height%253A300px%253B%2520%2520display%253A%2520flex%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520justify-content%253A%2520space-around%253B%2520align-items%253A%2520center%253B%257D%250A%250A%2520%2520%2520%2520%2523circle1%257Bwidth%253A50%2525%253B%2520height%253A%2520100px%253B%2520background-color%253A%2520white%253B%2520border-radius%253A%252050%2525%253B%2520display%253A%2520flex"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code3[1].innerHTML = `
    <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&width=&ds=false&dsyoff=76px&dsblur=63px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=165%25&si=false&es=2x&wm=false&code=%2524%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520var%2520mql%2520%253D%2520window.matchMedia%28%2522screen%2520and%2520%28max-width%253A%2520600px%29%2522%29%253B%250A%2520%2520%2520%2520if%2520%28mql.matches%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522%2523next%2522%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.slide%2520li%253Afirst%27%29.prependTo%28%27.slide%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.slide%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%2520-880%2520%257D%252C%2520800%252C%2520function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28this%29.css%28%2522background-color%2522%252C%2520%2522%2523fbc22c%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522%2523prev%2522%29.css%28%2522background-color%2522%252C%2520%2522white%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27article%27%29.animate%28%257B%2520height%253A%2520%271665px%27%2520%257D%252C%2520500%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522%2523prev%2522%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.slide%2520li%253Afirst%27%29.prependTo%28%27.slide%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.slide%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%252010%2520%257D%252C%2520800%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28this%29.css%28%2522background-color%2522%252C%2520%2522%2523fbc22c%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522%2523next%2522%29.css%28%2522background-color%2522%252C%2520%2522white%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27article%27%29.animate%28%257B%2520height%253A%2520%27750px%27%2520%257D%252C%2520500%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%253B%250A%250A%2520%2520%2520%2520%257D%2520else%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27%2523prev%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.slide%2520li%253Afirst%27%29.prependTo%28%27.slide%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.slide%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%252010%2520%257D%252C%2520800%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28this%29.css%28%2522background-color%2522%252C%2520%2522%2523fbc22c%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522%2523next%2522%29.css%28%2522background-color%2522%252C%2520%2522white%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27%2523next%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.slide%2520li%253Afirst%27%29.prependTo%28%27.slide%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.slide%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%2520-880%2520%257D%252C%2520800%252C%2520function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28this%29.css%28%2522background-color%2522%252C%2520%2522%2523fbc22c%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522%2523prev%2522%29.css%28%2522background-color%2522%252C%2520%2522white%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2524%28%27%2523prev2%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27%2523ser_ul%2520li%253Alast%27%29.prependTo%28%27%2523ser_ul%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27%2523ser_ul%27%29.css%28%27margin-left%27%252C%2520-1000%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27%2523ser_ul%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%25200%2520%257D%252C%2520800%29%250A%2520%2520%2520%2520%257D%29%253B%250A%250A%2520%2520%2520%2520%2524%28%27%2523next2%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27%2523ser_ul%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%2520-1000%2520%257D%252C%2520800%252C%2520function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27%2523ser_ul%2520li%253Afirst%27%29.appendTo%28%27%2523ser_ul%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27%2523ser_ul%27%29.css%28%257B%2520marginLeft%253A%25200%2520%257D%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%253B%250A%2520%2520%2520%2520%257D%29%253B%250A%250A%257D%29%253B%250A"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code[2].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=auto&width=500&ds=false&dsyoff=76px&dsblur=63px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=18px&lh=250%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520class%253D%2522slide1%2520slidec%2522%253E%250A%2520%2520%2520%253Cdiv%2520class%253D%2522rain%2522%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
  style="width: 450px; height: 192px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code2[2].innerHTML = `
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=164%25&si=false&es=2x&wm=false&code=.drop%2520%257B%250A%2520%2520%2520%2520background%253A-webkit-gradient%28linear%252C0%2525%25200%2525%252C0%2525%2520100%2525%252C%2520from%28rgb%2841%252C%252041%252C%252041%29%2520%29%252C%2520to%28rgba%28126%252C%2520126%252C%2520126%252C%25200.6%29%29%2520%2520%29%253B%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520width%253A1px%253B%250A%2520%2520%2520%2520height%253A20px%253B%250A%2520%2520%2520%2520position%253A%2520absolute%253B%250A%2520%2520%2520%2520bottom%253A200px%253B%250A%2520%2520animation%253A%2520fall%25201.5s%2520linear%2520infinite%253B%250A%2520%2520%257D%250A%250A%2520%2520%2540keyframes%2520fall%2520%257B%250A%2520%2520%2520%2520to%2520%257Bmargin-top%253A900px%253B%257D%250A%2520%2520%257D"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code3[2].innerHTML = `
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=164%25&si=false&es=2x&wm=false&code=%2520var%2520nbDrop%2520%253D%2520858%253B%2520%250A%250Afunction%2520randRange%28%2520minNum%252C%2520maxNum%29%2520%257B%250A%2520%2520return%2520%28Math.floor%28Math.random%28%29%2520*%2520%28maxNum%2520-%2520minNum%2520%252B%25201%29%29%2520%252B%2520minNum%29%253B%250A%257D%250A%250Afunction%2520createRain%28%29%2520%257B%250A%250A%2520%2520for%28%2520i%253D1%253Bi%253CnbDrop%253Bi%252B%252B%29%2520%257B%250A%2520%2520var%2520dropLeft%2520%253D%2520randRange%280%252C1600%29%253B%250A%2520%2520var%2520dropTop%2520%253D%2520randRange%28-1000%252C1400%29%253B%250A%250A%2520%2520%2524%28%27.rain%27%29.append%28%27%253Cdiv%2520class%253D%2522drop%2522%2520id%253D%2522drop%27%252Bi%252B%27%2522%253E%253C%252Fdiv%253E%27%29%253B%250A%2520%2520%2524%28%27%2523drop%27%252Bi%29.css%28%27left%27%252CdropLeft%29%253B%250A%2520%2520%2524%28%27%2523drop%27%252Bi%29.css%28%27top%27%252CdropTop%29%253B%250A%2520%2520%257D%250A%250A%257D%250AcreateRain%28%29%253B"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code[3].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=164%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522slide_box%2522%2520%2520id%253D%252244%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sl%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520id%253D%2522prev%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522img%252Fprev.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2520click%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_inner%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img%2522%253E%253Cimg%2520src%253D%2522img%252Fp_pic_l_1.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25ED%2594%25BC%25EC%25B9%25B4%25EC%25B8%2584%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img%2522%253E%253Cimg%2520src%253D%2522img%252Fp_pic_l_18.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25EC%259D%25B4%25EC%2583%2581%25ED%2595%25B4%25EC%2594%25A8%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img%2522%253E%253Cimg%2520src%253D%2522img%252Fp_pic_l_19.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25ED%258C%258C%25EC%259D%25B4%25EB%25A6%25AC%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img%2522%253E%253Cimg%2520src%253D%2522img%252Fp_pic_l_20.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25EA%25BC%25AC%25EB%25B6%2580%25EA%25B8%25B0%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img%2522%253E%253Cimg%2520src%253D%2522img%252Fp_pic_l_2.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25EC%25B9%2598%25EC%25BD%2594%25EB%25A6%25AC%25ED%2583%2580%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img%2522%253E%253Cimg%2520src%253D%2522img%252Fp_pic_l_3.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25EB%25B8%258C%25EC%25BC%2580%25EC%259D%25B8%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img%2522%253E%253Cimg%2520src%253D%2522img%252Fp_pic_l_4.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25EB%25A6%25AC%25EC%2595%2584%25EC%25BD%2594%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img%2522%253E%253Cimg%2520src%253D%2522img%252Fp_pic_l_5.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25EB%2582%2598%25EB%25AC%25B4%25EC%25A7%2580%25EA%25B8%25B0%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img%2522%253E%253Cimg%2520src%253D%2522img%252Fp_pic_l_6.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%25EC%2595%2584%25EC%25B0%25A8%25EB%25AA%25A8%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522po_img"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code2[3].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=164%25&si=false&es=2x&wm=false&code=.slide_box%257B%250A%2520%2520%2520%2520width%253A80%2525%253B%250A%2520%2520%2520%2520height%253A500px%253B%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520margin-left%253A42%2525%253B%250A%250A%257D%250A.sl%257B%250A%2520%2520%2520%2520width%253A7109px%253B%250A%2520%2520%2520%2520height%253A100%2525%253B%250A%2520%2520%2520%2520%2540include%2520flex%28flex%252Cspace-around%252Ccenter%252Crow%29%253B%250A%250A%257D%250A%2523prev%252C%2523next%257B%250A%2520%2520%2520%2520width%253A150px%253B%250A%2520%2520%2520%2520height%253A150px%253B%250A%2520%2520%2520%2520background-color%253A%2520gold%253B%250A%2520%2520%2520%2520position%253Aabsolute%253B%250A%2520%2520%2520%2520border-radius%253A%252050%2525%253B%250A%2520%2520%2520%2520z-index%253A%2520999%253B%250A%2520%2520%2520%2520cursor%253A%2520pointer%253B%250A%257D%250A%2523prev%257B%250A%2520%2520%2520%2520left%253A-4%2525%253B%250A%2520%2520%2520%2520transition%253A.3s%2520ease%253B%250A%2520%2520%2520%2520font-size%253A%252050px%253B%250A%2520%2520%2520%2520%2526%253Ahover%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520left%253A-3%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520background-color%253A%2520white%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520img%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520width%253A46%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520transform%253A%2520translate%2868px%252C35px%29%253B%250A%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%257D%250A%257D%250A%2523next%257B%250A%2520%2520%2520%2520right%253A-4%2525%253B%250A%2520%2520%2520%2520transition%253A.3s%2520ease%253B%250A%2520%2520%2520%2520%2526%253Ahover%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520right%253A-3%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520background-color%253A%2520white%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520img%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520transform%253A%2520translate%2817px%252C43px%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%250A%250A.po%257B%250A%2520%2520%2520%2520width%253A17vw%253B%250A%2520%2520%2520%2520height%253Aauto%253B%250A%2520%2520%2520%2520background-color%253A%2520gold%253B%250A%2520%2520%2520%2520transform%253A%2520skew%28-7deg%29%253B%250A%2520%2520%2520%2520%2540include%2520flex%28flex%252Ccenter%252Ccenter%252Ccolumn%29%253B%250A%2520%2520%2520%2520position%253Arelative%253B%250A%2520%2520%2520%2520overflow%253A%2520hidden%253B%250A%2520%2520%2520%2520transition%253A%2520.3s%2520ease%253B%250A%257D%250A.po_img%257B%250A%2520%2520%2520%2520width%253A15vw%253B%250A%2520%2520%2520%2520height%253Aauto%253B%250A%2520%2520%2520%2520margin-top%253A8%2525%253B%250A%250A%2520%2520%2520%2520transform%253A%2520skew%287deg%29%253B%250A%2520%2520%2520%2520img%257B%250A%2520%2520%2520%2520%2520%2520%2520width%253A169%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520margin%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520top%253A-18%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520left%253A-39%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%250A%257D%250A.po_inner%257B%250A%2520%2520%2520%2520width%253A4vw%253B%250A%2520%2520%2520%2520height%253A4vw%253B%250A%2520%2520%2520%2520position%253Aabsolute%253B%250A%250A%2520%2520%2520%2520top%253A0%253B%250A%2520%2520%2520%2520right%253A0%253B%250A%257D%250A.click%257B%250A%2520%2520%2520%2520overflow%253A%2520visible%253B%250A%2520%2520%2520%2520transform%253A%2520skew%28-7deg%29%2520scale%281.2%29%253B%250A%250A%2520%2520%2520%2520.po_box%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520transform%253A%2520scaleY%281%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2540include%2520flex%28flex%252Ccenter%252Ccenter%252Crow%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%250A%250A.po_box%257B%250A%2520%2520%2520%2520width%253A100%2525%253B%250A%2520%2520%2520%2520height%253A60px%253B%250A%2520%2520%2520%2520bottom%253A0%253B%250A%2520%2520%2520%2520transition%253A.3s%2520ease%253B%250A%2520%2520%2520%2520background-image%253A%2520linear-gradient%28270deg%252C%2520rgba%2825%252C7%252C45%252C0.5%29%25200%2525%252C%2520%252319072d%2520100%2525%29%253B%250A%2520%2520%2520%2520transform%253A%2520scaleY%280%29%253B%250A%2520%2520%2520%2520position%253Aabsolute%253B%250A%2520%2520%2520%2520%2540include%2520flex%28flex%252Ccenter%252Ccenter%252Crow%29%253B%250A%2520%2520%2520%2520transform-origin%253A%2520bottom%253B%250A%2520%2520%2520%2520p%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520color%253Awhite%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520transform%253A%2520skew%287deg%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520font-size%253A%252020px%253B%250A%2520%2520%2520%2520%257D%250A%257D"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code3[3].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=164%25&si=false&es=2x&wm=false&code=var%2520mql%2520%253D%2520window.matchMedia%28%2522screen%2520and%2520%28max-width%253A1100px%29%2522%29%253B%250Avar%2520mq2%2520%253D%2520window.matchMedia%28%2522screen%2520and%2520%28min-width%253A768px%29and%2520%28max-width%253A1099px%29%2522%29%253B%250Avar%2520mq3%2520%253D%2520window.matchMedia%28%2522screen%2520and%2520%28min-width%253A500px%29%2520and%2520%28max-width%253A767px%29%2522%29%253B%250Avar%2520page1%253D0%253B%250Avar%2520sd%2520%253D%2520%2524%28%27.po%27%29.outerWidth%28true%29%253B%250Aif%28mq2.matches%29%2520%257B%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%2524%28%27%2523prev%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520page1--%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28page1%2520%253C%25200%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520page1%2520%253D%25200%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.removeClass%28%27click%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.eq%28page1%29.addClass%28%27click%27%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.sl%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%2520-sd%2520*%2520page1*2.35%257D%252C%2520500%29%253B%250A%250A%2520%2520%2520%2520%257D%29%253B%250A%250A%2520%2520%2520%2520%2524%28%27%2523next%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520page1%252B%252B%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28page1%2520%253E%2520%2524%28%27.po%27%29.length%2520-1%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520page1%2520%253D%2520%2524%28%27.po%27%29.length%2520-1%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.removeClass%28%27click%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.eq%28page1%29.addClass%28%27click%27%29%253B%250A%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.sl%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%2520-sd%2520*%2520page1*2.35%257D%252C%2520500%29%253B%250A%2520%2520%2520%2520%257D%29%253B%257Delse%2520if%28mq3.matches%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520var%2520sd1%2520%253D%2520%2524%28%27.po%27%29.outerWidth%28true%29%253B%250A%2520%2520%2520%2520%2524%28%27%2523prev%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520page1--%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28page1%2520%253C%25200%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520page1%2520%253D%25200%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.removeClass%28%27click%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.eq%28page1%29.addClass%28%27click%27%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.sl%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%2520-sd1*page1*2.79%257D%252C%2520500%29%253B%250A%250A%2520%2520%2520%2520%257D%29%253B%250A%250A%2520%2520%2520%2520%2524%28%27%2523next%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520page1%252B%252B%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28page1%2520%253E%2520%2524%28%27.po%27%29.length%2520-%25201%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520page1%2520%253D%2520%2524%28%27.po%27%29.length%2520-%25201%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.removeClass%28%27click%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.eq%28page1%29.addClass%28%27click%27%29%253B%250A%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.sl%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%2520-sd1*page1*2.79%257D%252C%2520500%29%253B%250A%2520%2520%2520%2520%257D%29%253B%257D%250A%2520%2520%2520%2520else%2520if%2520%28mql.matches%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2524%28%27%2523prev%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520page1--%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28page1%2520%253C%25200%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520page1%2520%253D%25200%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.removeClass%28%27click%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.po%27%29.eq%28page1%29.addClass%28%27click%27%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%27.sl%27%29.stop%28%29.animate%28%257B%2520marginLeft%253A%2520-sd%2520*%2520page1*6%257D%252C%2520500%29%253B%250A%250A%2520%2520%2520%2520%257D%29%253B%250A%250A%2520%2520%2520%2520%2524%28%27%2523next%27%29.click%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520page1%252B%252B%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28page1%2520%253E%2520%2524%28%27.po%27%29.length%2520-%25201%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code[4].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=164%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522art_box%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_img%2522%253E%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text%2522%253E%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art_add%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522img%252Fmy4.png%2522%2520alt%253D%2522%2523%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3%2522%253E%253Cimg%2520src%253D%2522img%252Fmy2.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3%2522%253E%253Cimg%2520src%253D%2522img%252Fmy5.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_img%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art_add%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522img%252Fmy4.png%2522%2520alt%253D%2522%2523%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3%2522%253E%253Cimg%2520src%253D%2522img%252Fmy2.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3%2522%253E%253Cimg%2520src%253D%2522img%252Fmy5.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_img%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art_add%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522img%252Fmy4.png%2522%2520alt%253D%2522%2523%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3_box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3%2522%253E%253Cimg%2520src%253D%2522img%252Fmy2.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3%2522%253E%253Cimg%2520src%253D%2522img%252Fmy5.png%2522%2520alt%253D%2522%2523%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_img%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art1_text2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522art_add%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522img%252Fmy4.png%2522%2520alt%253D%2522%2523%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code2[4].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=164%25&si=false&es=2x&wm=false&code=.art_box%2520%257B%250A%2520%2520%2520%2520width%253A%2520100%2525%253B%250A%2520%2520%2520%2520height%253A%252080%2525%253B%250A%250A%2520%2520%2520%2520%2540include%2520flex%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520flex-wrap%253A%2520wrap%253B%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%253B%250A%250A%2520%2520%2520%2520border%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520top%253A%2520%2524border%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520left%253A%2520%2524border%253B%250A%250A%2520%2520%2520%2520%257D%250A%250A%250A%257D%250A.art_box2%257B%250A%2520%2520%2520%2520display%253A%2520none%253B%250A%257D%250A%250A.art_box3%257B%250A%2520%2520%2520%2520display%253A%2520none%253B%250A%257D%250A%250A.art1%2520%257B%250A%2520%2520%2520%2520width%253A%252016.513%2525%253B%250A%2520%2520%2520%2520height%253A%2520320px%253B%250A%250A%250A%250A%2520%2520%2520%2520border%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520right%253A%2520%2524border%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520bottom%253A%2520%2524border%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520left%253A%2520%2524border2%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520top%253A%2520%2524border2%253B%250A%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%2526%253Ahover%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520border%253A%25201px%2520solid%2520%2523333%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520box-shadow%253A%25204px%25204px%25204px%2520%2523ddd%253B%250A%2520%2520%2520%2520%257D%250A%250A%250A%2520%2520%2520%2520%2540include%2520flex4%28flex%252C%2520flex-end%252C%2520center%252C%2520column%29%253B%250A%2520%2520%2520%2520position%253Arelative%253B%250A%2520%2520%2520%2520transition%253A0.3s%2520ease%253B%250A%250A%2520%2520%2520%2520%2526%253Ahover%2520.art1_text%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520bottom%253A%252040px%253B%250A%250A%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520.art1_img%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520width%253A%252070%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520height%253A%2520220px%253B%250A%250A%2520%2520%2520%2520%257D%250A%250A%250A%250A%2520%2520%2520%2520.art1_text2%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520width%253A%2520100%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520height%253A%252070px%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520margin-bottom%253A%25202.5%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2540include%2520flex4%28flex%252C%2520space-around%252C%2520flex-end%252C%2520row%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520cursor%253A%2524c%253B%250A%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520.art_add%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253A%252030px%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520height%253A%252030px%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520position%253Arelative%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520margin-bottom%253A-5%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520img%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253A%252065%2525%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2526%253Ahover%253A%253Aafter%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520transform%253A%2520scaleY%281%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2526%253Ahover%253A%253Abefore%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520transform%253A%2520scale%281%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520.art_add%253A%253Aafter%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520content%253A%27ADD%2520TO%2520CART%27%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520transition%253A.3s%2520ease%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253A120px%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520height%253A30px%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520bottom%253A%2520%2523333%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520position%253Aabsolute%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520background-color%253A%2520%2523333%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253Awhite%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520font-size%253A%252012px%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2540include%2520flex%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border-radius%253A%252010px%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520top%253A-4px%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520right%253A-120px%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520transform%253A%2520scaleY%280%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520.art_add%253A%253Abefore%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520content%253A%2520%27%27%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253A0%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520height%253A0%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520transition%253A.3s%2520ease%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520top%253A8px%2520solid%2520transparent%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520rig"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        code3[4].innerHTML = `<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=164%25&si=false&es=2x&wm=false&code=%2524.ajax%28%257B%250A%250A%2520%2520%2520%2520method%253A%2520%2522GET%2522%252C%250A%250A%2520%2520%2520%2520url%253A%2520%2522https%253A%252F%252Fdapi.kakao.com%252Fv3%252Fsearch%252Fbook%253Ftarget%253Dtitle%2522%252C%250A%250A%2520%2520%2520%2520data%253A%2520%257B%2520query%253A%2520%27%25EC%2586%258C%25EC%2584%25A4%27%252C%2520size%253A%252012%2520%257D%252C%250A%2520%2520%2520%2520headers%253A%2520%257B%2520Authorization%253A%2520%2522KakaoAK%25207b2300fc6315bb65035d1a3c7b49b161%2522%2520%257D%250A%250A%257D%29%250A%250A%2520%2520%2520%2520.done%28function%2520%28msg2%29%2520%257B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520var%2520art%2520%253D%2520document.getElementsByClassName%28%27art1_img%27%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520for%2520%28var%2520i%2520%253D%25200%253B%2520i%2520%253C%2520art.length%253B%2520i%252B%252B%29%2520%257B%250A%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522.art1_img%2522%29.eq%28i%29.append%28%27%253Ca%2520href%253D%2522%2523%2522%253E%27%2520%252B%2520%2522%253Cimg%2520src%253D%27%2522%2520%252B%2520msg2.documents%255Bi%255D.thumbnail%2520%252B%2520%2522%27%252F%253E%2522%2520%252B%2520%2522%253C%252Fa%253E%2522%29%253B%250A%250A%250A%250A%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520var%2520sale_price2%2520%253D%2520Math.floor%28msg2.documents%255Bi%255D.sale_price%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520var%2520price3%2520%253D%2520Math.ceil%28sale_price2%2520%252F%2520100%29%2520*%2520100%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522.art1_text%2522%29.eq%28i%29.append%28%27%253Cspan%253E%27%2520%252B%2520msg2.documents%255Bi%255D.publisher%2520%252B%2520%27%253C%252Fspan%253E%27%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522.art1_text%2522%29.eq%28i%29.append%28%2522%253Ch3%253E%2522%2520%252B%2520%27%253Ca%2520href%253D%2522sub_book13.html%2522%253E%27%2520%252B%2520msg2.documents%255Bi%255D.title%2520%252B%2520%2522%253C%252Fa%253E%2522%2520%252B%2520%2522%253C%252Fh3%253E%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522.art1_text%2522%29.eq%28i%29.append%28%2522%253Ch6%253E%2522%2520%252B%2520msg2.documents%255Bi%255D.authors%2520%252B%2520%2522%253C%252Fh6%253E%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2524%28%2522.art1_text%2522%29.eq%28i%29.append%28%27%253Cp%253E%2526%252392%253B%27%2520%252B%2520price3%2520%252B%2520%27%253C%252Fp%253E%27%29%253B%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%257D%29%253B"
  style="border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>`
        h1[1].innerText = 'URBAN PHOTO'
        h1[2].innerText = 'QUANTIC DREAM'
        h1[3].innerText = 'POKEMON'
        h1[4].innerText = "BANDI&LUNI'S"
        p[1].innerText = "독특한 컨셉들을 촬영해주는 사진관이며 반응형과 jQuery, JS 등등 처음 배워 적용했던 사이트 입니다."
        p[2].innerText = "퀀틱드림회사의 디트로이트 비컴휴먼 게임 홈페이지를 제작했습니다. 게임의 컨셉에 맞춰 애니메이션 효과를 많이 주고 서브페이지는 다른 게임들의 소개하는 페이지를 제작했습니다."
        p[3].innerText = "포켓몬의 불가사의던전dx를 소개하는 내용입니다. 한국에 정식발매를 안해 한국 사이트가 없어 제작해봤습니다."
        p[4].innerText = "ajax를 이용하여 만든 책 홈페이지 입니다."
        p1[1].innerText = 'sub페이지의 모바일 사이즈에 버튼을 누르면 박스의 세로크기가 줄었다 늘었다 하는 코드입니다.'
        p1[2].innerText = 'sub2페이지의 슬라이드 부분의 비내리는 효과입니다.'
        p1[3].innerText = '슬라이드 버튼 클릭 시 효과와 반응형에 맞춘 슬라이드 코드입니다.'
        p1[4].innerText = 'ajax를 활용하여 책의 정보를 가져온 코드입니다.'

        //tv hover시 변하는 효과//
        $(function () {
            $('.text').hover(function () {
                var index2 = $(this).index();
                setTimeout(() => $('.video').css({ display: 'none' }))
                setTimeout(() => $('.video2').css({ display: 'block' }))
                setTimeout(() => $('.video2').css({ display: 'none' }), 500)
                setTimeout(() => $('.ttv').eq(index2).css({ display: 'block' }), 500)

            }, function () {
                $('.video2').css('display', 'none');
                $('.ttv').css('display', 'none');
                $('.video').css('display', 'block');
            }, 5000);


            $('.ht').click(function () {
                $('.css').css('display', 'none');
                $('.js').css('display', 'none');
                $('.html').css('display', 'block');
            });
            $('.cs').click(function () {
                $('.html').css('display', 'none');
                $('.js').css('display', 'none');
                $('.css').css('display', 'block');
            });
            $('.jj').click(function () {
                $('.css').css('display', 'none');
                $('.html').css('display', 'none');
                $('.js').css('display', 'block');
            });
        });


        //별똥별 효과//
        function getStarIcon() {
            const chance = Math.random();
            const starDistribution = [
                [0.05, '•'],
                [0.2, '*'],
                [1, '.']
            ];
            const about = document.getElementsByClassName('about');
            return starDistribution.find(dist => chance < dist[0])[1];
        }

        function getColor() {
            const chance = Math.random();
            const colorDistribution = [
                [0.2, '#fce7a1'],
                [0.4, '#f7c45e'],
                [1, '#fdda68'],
            ];

            return colorDistribution.find(dist => chance < dist[0])[1];
        }
        //별 효과//
        function createStar() {
            const star = document.createElement('p');
            const star2 = document.createElement('p');
            star.innerHTML = getStarIcon();
            star2.innerHTML = getStarIcon();
            star.className += 'star';
            star2.className += 'star3';
            star.style.top = `${getRandomInt(0, 155)}%`;
            star2.style.top = `${getRandomInt(0, 220)}%`;
            star.style.left = `${getRandomInt(0, 100)}%`;
            star2.style.left = `${getRandomInt(0, 100)}%`;
            star.style.color = getColor();
            star2.style.color = getColor();
            star.style.zIndex = -1;
            star2.style.zIndex = -1;
            star.style['animation-delay'] = `${getRandomInt(0, 5)}s`;
            star2.style['animation-delay'] = `${getRandomInt(0, 5)}s`;
            star.style['animation-duration'] = `${getRandomInt(2, 4)}s`;
            star2.style['animation-duration'] = `${getRandomInt(2, 4)}s`;
            document.getElementsByClassName('star')[0].appendChild(star);
            document.getElementsByClassName('main')[0].appendChild(star2);

        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        const starCount = 250;
        for (let i = 0; i < starCount; i++) {
            createStar();
        }
// ufo 효과//
        let num = 0;
let idx = 0;
let delta;
        $(window).on('mousewheel DOMMouseScroll', function (e) {
        
            var delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;
        if (delta < 0) {
            if (!(num == 50) && delta < 0) {
                num++;
                if (num>=1) {    
                    $(".ufoo").css("transform","translate3d("+num*+700+"px,"+"0px, 0px)");
                    
                }if(num>=9){
                    $(".ufoo").css("transform","translate3d("+num*-1+"px,"+"1200px, 0px)");
                }if(num>=14){
                    $(".ufoo").css("transform","translate3d("+num*+200+"px,"+"1500px, 0px)");
                }
            
                if(num>=19){
                    $(".ufoo").css("transform","translate3d(1300px,1650px, 0px)");
                    $("#beam").css("animation",'ufo2 5s ease');
                    $('.tv').css('animation','tvv 1.5s ease forwards');
                    $('.tv').css('animation-delay','1s');
                }   

            }
        } else {

            if (num>=1){
                num--;
                $(".ufoo").css("transform","translate3d("+num*-1+"px,"+"0px, 0px)");

            } 
            
        }
    })
