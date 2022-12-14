function pokemonChar(pokName, hp, atk, def, spA, spD, moveSpd, cd, ls, crit, ten, atkS){
    this.pokName = pokName
    this.pokHp = hp
    this.pokAtk = atk
    this.pokDef=def
    this.pokSAtk=spA
    this.pokSDef=spD
    this.pokMov=moveSpd;
    this.pokCool=cd;
    this.pokLife=ls;
    this.pokCrit=crit;
    this.pokTen=ten;
    this.pokAtkSpd=atkS
}

const venusaur = new pokemonChar(
    'Venusaur',
    [0,3330,3343,3395,3457,3683,3773,3881,4011,4469,4655,4879,5148,5470,5857,6321],
    [0,134,136,139,142,154,159,165,172,196,206,218,232,249,269,293],
    [0,35,37,39,42,52,56,61,67,88,97,107,119,134,152,174],
    [0,50,63,79,98,166,193,226,265,403,459,527,608,705,822,962],
    [0,27,29,31,33,41,44,48,53,69,76,84,94,106,120,137],
    [0,.037,.037,.037,.037,.0385,.0385,.04,.04,.0415,.0415,.043,.043,.043,.043,.043],
    [0,0,0,0,0,.05,.05,.05,.05,.15,.15,.15,.15,.25,.25,.25],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,.0333,.0666,.0999,.1332,.1665,.1998,.1998,.1998,.1998,.1998,.1998,.1998,.1998,.1998],
    [0,.10,.1014,.1031,.1052,.1127,.1157,.1193,.1236,.1387,.1449,1523,1612,1719,1847,2001]
)
const charizard = new pokemonChar(
    [0,3200,3264,3341,3434,3771,3905,4066,4259,4941,5219,5553,5953,6433,7009,7700],
    [0,161,165,170,176,199,208,219,232,278,297,319,346,378,417,463],
    [0,70,74,79,85,106,114,124,136,178,195,216,241,271,307,350],
    [0,20,21,23,25,32,35,38,42,56,62,69,77,87,99,114],
    [0,54,57,61,65,81,87,95,104,137,150,166,185,208,236,269],
    [0,.037,.037,.037,.037,.0385,.0385,.04,.04,.0415,.0415,.043,.043,.043,.043,.043],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,.05,.05,.05,.05,.1,.1,.1,.1,.15,.15,.15],
    [0,0,0,0,0,.15,.15,.15,.15,.3,.3,.3,.3,.3,.3,.3],
    [0,0,.0333,.0666,.0999,.1332,.1665,.1998,.1998,.1998,.1998,.1998,.1998,.1998,.1998,.1998],
    [0,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,]
)    
