//每个用户都有英雄，每个英雄都有装备，每个装备都有宝石,根据不同道具、等级等属性可以计算出战斗力，生命值等数值。
var User = (function () {
    function User() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.level = 0;
        this.totalExp = 0;
        this.heroes = [guanyu];
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "herosInTeam"
        //基础属性,相对比较难维护 
        // __heroesInTeam:Hero[]=[];
        //高阶属性
        //@Logger
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.herosInTeam.map(function (hero) { return result += hero.getFightPower(); }); //map:将数组中的某一属性生成一个新的数组，
        result += this.pet.getFightPower();
        return result;
    };
    return User;
}());
egret.registerClass(User,'User');
var guanyu = new Hero();
var Hero = (function () {
    function Hero() {
        this.isInTeam = false;
        this.equipments = [];
        this.hp = 50;
        this.level = 1;
        this.quality = 2.8;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHP"
        ,function () {
            return this.level * 100 * this.quality;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.attack; }); //遍历所有装备，将attack值加到result上。
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this.maxHP * 1.5 + this.attack * 1.8;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment() {
        this.attack = 50;
        this.jewel = [];
    }
    var d = __define,c=Equipment,p=c.prototype;
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var Jewel = (function () {
    function Jewel() {
    }
    var d = __define,c=Jewel,p=c.prototype;
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
var Pet = (function () {
    function Pet() {
    }
    var d = __define,c=Pet,p=c.prototype;
    p.getFightPower = function () {
        return 100;
    };
    return Pet;
}());
egret.registerClass(Pet,'Pet');
var Logger = function () {
};
//# sourceMappingURL=User.js.map