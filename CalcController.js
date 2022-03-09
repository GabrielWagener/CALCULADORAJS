class CalcController { 

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalEl = document.querySelector ("#display");
        this._DateEl = document.querySelector ("#display");
        this._timeEl = document.querySelector ("#display");
        this._displayCalc = "0" ;
        this._CurrentDate; 
        this.initialize(); 
        this._CalcController

    }
    
    initialize (){
        setInterval(()=>{

            this.displayDate = this.CurrentDate.toLocaleDateString(this._locale)
            this.displayTime = this.CurrentDate.toLocaleTimeString(this._locale)
        
        }, 1000);
        

    }

    setDisplayDateTime (){
        this.displayDate = this.CurrentDate.toLocaleDateString(this._locale,{
            day: '2-digit'
            month: 'numeric'
            _year: 'numeric',
            get year() {
                return this._year;
            },
            set year(value) {
                this._year = value;
            },
        })
        this.displayTime = this.CurrentDate.toLocaleTimeString(this._locale)

    }
    get displayTime (){
        return this._timeEl.innerHTML;

    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }
    get displayDate(){
        return this._DateEl.innerHTML;

    }

    set displayDate(value){
        return this._DateEl.innerHTML = value;

    }
    
    get displayCalc (){

        return this._displayCalEl.innerHTML
     }

    set displayCalc(value){
        this._displayCalEl.innerHTML = value;
     }
     get CurrentDate(){

        return new Date();

     }

     set CurrentDate(value){
         this._CurrentDate = value;
     }

}