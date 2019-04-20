import {Injectable} from '@angular/core';

let CONFIG_NAME = "config";

@Injectable()
export class ConfigProvider{
    
    private config = {
        showSlide: false
        ,monitorar:false
    }
    constructor(){

    }

    public getConfigData():any{
        return localStorage.getItem(CONFIG_NAME);
    }

   public setConfigData(showSlide?:boolean,monitorar?:boolean){

        let config = {
            showSlide: false
            ,monitorar:false
        }
        if(showSlide){
            config.showSlide = showSlide;
        }
        if(monitorar){
            config.monitorar = monitorar;
        }

        localStorage.setItem(CONFIG_NAME,JSON.stringify(config));

    }
}