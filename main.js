$(document).ready(function(){

    $('.menu-toggle').each(function(){
        $(this).click(function(){
            $('.menu').toggleClass('active');
        })
    })

    $.ajax({
        url : './db.json',
        success : res => {
            const data = res.projects;
            console.log(data[0]);

            let menuIndexActive = $('.menu-container .active').index();
            // render element
            function renderElement(){
                // container for stacking elements
                let imgContainer = '';
                // map through data
                data[menuIndexActive].info.map((info) => {

                    //add the img element to container
                    imgContainer += `<div class="img-container"><img src=${info.cover}></div>`
                });
                // append new elements
                $('.slides').html(imgContainer);
            }
            renderElement();
            //set slider counter
            let sliderCounter = 0;
            // set class based on counter
            $('.slides .img-container').eq(sliderCounter).addClass('active');
            // add title based on counter 
            $('.title').html(`<h2>${data[menuIndexActive].name}</h2>
                                <h3>${data[menuIndexActive].info[sliderCounter].name}</h3>`);
            // change background based on counter
            $('#hero').css({'background' : `url(${data[menuIndexActive].info[sliderCounter].cover})`,'background-size' : 'cover', 'background-repeat' : 'no-repeat', 'background-position' : 'bottom'});
            // slide the slider
            $('.img-container').css('transform', `translateX(calc(-100% * ${sliderCounter}))`);
            // run function every 5 sec
            function incrementCounter(){
                // reset all class
                $('.slides .img-container').removeClass('active');
                // set class based on counter
                $('.slides .img-container').eq(sliderCounter).addClass('active');
                // add title based on counter
                $('.title').html(`<h2>${data[menuIndexActive].name}</h2>
                                <h3>${data[menuIndexActive].info[sliderCounter].name}</h3>`);
                // change background based on counter
                $('#hero').css({'background' : `url(${data[menuIndexActive].info[sliderCounter].cover})`,'background-size' : 'cover', 'background-repeat' : 'no-repeat', 'background-position' : 'bottom'});
                // slide the slider
                $('.img-container').css('transform', `translateX(calc(-100% * ${sliderCounter}))`);
                //increment counter modulo by array length
                sliderCounter = (sliderCounter + 1) % data[menuIndexActive].info.length;
            }

            myInterval = setInterval(incrementCounter,5000);
        }
    });
    // handle event listeners
    $('.menu-tag').each(function(){
        $(this).click(function(){
            //clear interval
            clearInterval(myInterval);
            // clear active menu
            $('.menu-tag').removeClass('active');
            // assign active menu on this btn click
            $(this).addClass('active');
            // get this btn index
            let menuIndex = $(this).index();

            $.ajax({
                url : './db.json',
                success : res => {
                    const data = res.projects;
                     // container for stacking elements
                     let imgContainer = '';
                    // map through data
                    data[menuIndex].info.map((data) => {
                        //add the img element to container
                        imgContainer += `<div class="img-container"><img src=${data.cover}></div>`
                    });
                    // append new elements
                    $('.slides').html(imgContainer);
                    //set slider counter
                    let sliderCounter = 0;
                    // set class based on counter
                    $('.slides .img-container').eq(sliderCounter).addClass('active');
                    // add title based on counter 
                    $('.title').html(`<h2>${data[menuIndex].name}</h2>
                                        <h3>${data[menuIndex].info[sliderCounter].name}</h3>`);
                    // change background based on counter
                    $('#hero').css({'background' : `url(${data[menuIndex].info[sliderCounter].cover})`,'background-size' : 'cover', 'background-repeat' : 'no-repeat', 'background-position' : 'bottom'});
                    // slide the slider
                    $('.img-container').css('transform', `translateX(calc(-100% * ${sliderCounter}))`);
                    // run function every 5 sec
                    function incrementCounter(){
                        // reset all class
                        $('.slides .img-container').removeClass('active');
                        // set class based on counter
                        $('.slides .img-container').eq(sliderCounter).addClass('active');
                        // add title based on counter
                        $('.title').html(`<h2>${data[menuIndex].name}</h2>
                                        <h3>${data[menuIndex].info[sliderCounter].name}</h3>`);
                        // change background based on counter
                        $('#hero').css({'background' : `url(${data[menuIndex].info[sliderCounter].cover})`,'background-size' : 'cover', 'background-repeat' : 'no-repeat', 'background-position' : 'bottom'});
                        // slide the slider
                        $('.img-container').css('transform', `translateX(calc(-100% * ${sliderCounter}))`);
                        //increment counter modulo by array length
                        sliderCounter = (sliderCounter + 1) % data[menuIndex].info.length;
                        console.log(sliderCounter);
                    }

                    myInterval = setInterval(incrementCounter,5000);
                        
                }
            });
        });
    });
});
// let menuCounter = 0;
// // add active classes

// let imgCounter = 0


// adding event handler


