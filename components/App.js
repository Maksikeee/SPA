// import header from './Header.js'
// import main from './Main.js'
// import footer from './Footer.js'
import { getSlugOfHash, getPageData, hashChangeEvent } from '../utils/utils.js';


function App () {
    this.app = '';
    this.create = () => {
        this.app = document.createElement('div');
        this.app.classList.add('app')
        document.body.appendChild(this.app)
    }

    this.getData = () => { 
        fetch('../data/data.js')
            .then(respone => respone.text())
            .then(data => {
                setTimeout(()=>{
                    localStorage.setItem('dataSPA', data)
                    this.setTitle(location.hash)
                    hashChangeEvent(this.setTitle)
                    this.render();
                },0)
            })
    }

    this.setTitle = (hash) => {
        const slugOfHash = getSlugOfHash(hash);
        const data = getPageData(slugOfHash);
        document.title = (data.pageTitle)
    }

    this.render = async () => {
        const dataHeader = await import('./Header.js');
        const dataMain = await import('./Main.js');
        const dataFooter = await import('./Footer.js');

        const header = dataHeader.default;
        const main = dataMain.default;
        const footer = dataFooter.default;

        this.app.appendChild(header);      
        this.app.appendChild(main);      
        this.app.appendChild(footer);

        let menuBtn = document.querySelector('.menu-btn');
        let menu = document.querySelector('.nav__items');

        menuBtn.addEventListener('click', function(){
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active__btn');
        })

        document.addEventListener('click', (e) => {
            if(e.target!==menuBtn && e.target!==menu && !menuBtn.contains(e.target) && !menuBtn.contains(e.target)){
                if(menuBtn.classList.contains('active__btn')){
                    menu.classList.remove('active');
                    menuBtn.classList.remove('active__btn');
                }
            }
        })


        
    }

    this.init = () => {
        this.create()
        this.getData()        
    }
}

const app = new App().init()
