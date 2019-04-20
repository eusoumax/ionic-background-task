import { Component,OnInit, ChangeDetectorRef } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import {ConfigProvider} from '../providers/userdata/config';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[ConfigProvider]
})
export class HomePage implements OnInit {
  private contador:number = 0;
  private monitoraSegundoPlano = false;
  constructor(
    private platform: Platform
    ,private configProvider:ConfigProvider
    ,private ref: ChangeDetectorRef
    ,private backgroundMode: BackgroundMode
    ){
    
    platform.ready().then(()=>{
      let config = configProvider.getConfigData();

      console.log(`config:  ${config}`);
      if(config == undefined){
        this.backgroundMode.disable();
        console.log('configuracao inicial');
         this.configProvider.setConfigData(false,false);
      }
    });
  }

  ngOnInit(){
    //this.processoBackground();
    let config = this.configProvider.getConfigData();
    if(config){
      let objConfig:any = JSON.parse(config);debugger;
      if(objConfig && objConfig.monitorar){
        console.log(`inicializar valor de monitorar: ${objConfig.monitorar}`);
        this.monitoraSegundoPlano = objConfig.monitorar; 
      }
    }else{
      this.configProvider.setConfigData(false,false);
    }
  }


  processoBackground(){
    console.log(`contador valor:${this.contador}`);
    this.contador=this.contador +1;
     setTimeout( () =>{
        this.processoBackground();
      }
     ,10000);
  }

  processoBackgroundTeste(){
    if(this.monitoraSegundoPlano){
      console.log(`contador valor:${this.contador}`);
      this.contador=this.contador +1;
      setTimeout( () =>{
         this.processoBackgroundTeste();
       }
      ,10000);
    }
  }

  monitorarEvent(event:boolean){
    console.log(event);
    this.configProvider.setConfigData(false,event);
    //this.ref.markForCheck();
    this.backgroundMode.setEnabled(event);

    this.processoBackgroundTeste();
  }

  mostrarValorMonitorar(){
    console.log(this.monitoraSegundoPlano);
  }
}
