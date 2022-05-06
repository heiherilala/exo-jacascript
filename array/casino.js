
let input = [5,-13,2,-15,-5,14] //-31
input = [
10
,-28
,19
,16
,2
,-2
,-24
,-6
,24
,-2
,20
]
input = [
    50
    ,-135
    ,-94
    ,25
    ,-25
    ,20
    ,121
    ,62
    ,5
    ,-66
    ,-133
    ,50
    ,-59
    ,-30
    ,137
    ,-132
    ,89
    ,68
    ,130
    ,-63
    ,95
    ,18
    ,75
    ,68
    ,16
    ,-82
    ,92
    ,22
    ,40
    ,-113
    ,19
    ,61
    ,68
    ,-124
    ,56
    ,-96
    ,24
    ,-131
    ,-16
    ,48
    ,11
    ,-58
    ,2
    ,56
    ,-15
    ,-125
    ,-44
    ,-102
    ,-42
    ,-77
    ,69
]
input =[1,-3]
input =[1,3]
input =[4
    ,-15
    ,-5
    ,5
    ,-10]
    input =[10
        ,0
        ,8
        ,2
        ]

function fff(input) {
array_game =input.slice(1)
nombre =input.length-1
let gain = 0
let accum = 0
for (let i = 0; i < nombre; i++) {
    if (array_game[i]+accum<0){
        if (array_game[i]+accum < gain) gain = array_game[i] + accum
        accum =accum+array_game[i]
    }else{accum=0}
}
return gain
}

console.log(fff(input));
