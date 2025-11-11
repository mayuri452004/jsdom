let obj = {
	name : "mayuri",
	age : 21,
	address : {
		city : "satara",
		pin : 415001
	}
}

let copy = structuredClone(obj)
copy.address.city = "pune"

console.log(obj.address.city)
console.log(copy.address.city)