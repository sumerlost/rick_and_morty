var a = ["hola/soy/gabi/1", "hola/soy/gabi/2", "hola/soy/gabi/3", "hola/soy/gabi/4"]

var d = []
d.push(a.map((i) => { let a = i.split("/"); return a[3] }))


console.log(d)