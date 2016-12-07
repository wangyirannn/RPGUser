//每个用户都有英雄，每个英雄都有装备，每个装备都有宝石,根据不同道具、等级等属性可以计算出战斗力，生命值等数值。
class User{
    cash:number=0;

    gold:number=0;

    exp:number=0;

    level:number=0;

    totalExp:number=0;

    heroes:Hero[]=[guanyu];

    pet:Pet;
//基础属性,相对比较难维护 
   // __heroesInTeam:Hero[]=[];
//高阶属性
    //@Logger
    get herosInTeam(){
        return this.heroes.filter(hero=>hero.isInTeam);
    }

    getFightPower(){
        var result=0;
        this.herosInTeam.map(hero=>result+=hero.getFightPower());//map:将数组中的某一属性生成一个新的数组，
        result+=this.pet.getFightPower();
        return result;
        
    }

}

class Hero{

    isInTeam:boolean=false;

    equipments:Equipment[]=[];

    hp=50;

    level=1;

    quality:number=2.8;

    get maxHP(){
        return this.level*100*this.quality;
        
    }

    get attack(){
        var result=0;
        this.equipments.forEach(e=>result+=e.attack);//遍历所有装备，将attack值加到result上。
        return result;
    }

    get fightPower(){
        return this.getFightPower();
    }

    getFightPower(){
        return this.maxHP*1.5+this.attack*1.8;
    }
}

class Equipment{
    jewel:Jewel[]=[jewel1,jewel2];
    get attack(){
        var result=0;
        this.jewel.forEach(e=>result+=e.attack);
        return result;
    }
}

class Jewel{
    quality:number;
    get attack(){
        var result=0;
        result=this.quality*1.5;
        return result;
    }
}

var guanyu:Hero=new Hero();
var jewel1:Jewel=new Jewel();
jewel1.quality=1;
var jewel2:Jewel=new Jewel();
jewel2.quality=2;

class Pet{

    getFightPower(){
        return 100;
    }
}

var Logger:MethodDecorator=()=>{

}