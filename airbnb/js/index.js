/**
 * Created by Yongwon on 2021-04-11
 * Email: yongwon0824@naver.com
 */

(()=>{
    window.onload = () => {
        let search_small = document.querySelector(".search--small")

        window.addEventListener("scroll", (e)=>{
            let y = window.scrollY;
            let search_large = document.querySelector(".search--large__wrapper");
            let search_small = document.querySelector(".search--small")
            let header = document.querySelector(".header")
            let nav_child = document.querySelectorAll(".nav__wrapper__child")

            if(y>0){
                if(!search_large.classList.contains("search--large__wrapper--close")){
                    search_large.classList.add("search--large__wrapper--close")
                    search_small.classList.add("search--small--show")
                    header.classList.add("header--white")
                    header.classList.remove("header--large")
                }
            }else if(y===0){
                if(search_large.classList.contains("search--large__wrapper--close")){
                    search_large.classList.remove("search--large__wrapper--close")
                    search_small.classList.remove("search--small--show")
                    header.classList.remove("header--white")
                    header.classList.remove("header--large")
                    for(let ele of nav_child){
                        ele.classList.remove("nav__wrapper__child--black")
                    }
                }
            }
        })

        search_small.addEventListener("click", ()=>{
            let search_large = document.querySelector(".search--large__wrapper");
            let search_small = document.querySelector(".search--small")
            let header = document.querySelector(".header")
            let nav_child = document.querySelectorAll(".nav__wrapper__child")

            if(!header.classList.contains("header--large")){
                header.classList.add("header--large")
                search_small.classList.remove("search--small--show")
                search_large.classList.remove("search--large__wrapper--close")
                for(let ele of nav_child){
                    ele.classList.add("nav__wrapper__child--black")
                }

            }
            else if(header.classList.contains("header--large")){
                header.classList.remove("header--large")
                search_large.classList.add("search--large__wrapper--close")
                search_small.classList.add("search--small--show")
                for(let ele of nav_child){
                    ele.classList.remove("nav__wrapper__child--black")
                }
            }

        })
    }
})()