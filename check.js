function checkt(x) {

    if (x == null && typeof x == "object") {
        return " null"
    }
    else if (isNaN(x) && typeof x == "number") {
        return " NaN";
    }
    else if (!x) {

        return " Undefined";
    }
    if (x.constructor == Array) {
        if (x[1].constructor == Object) {
            console.log(" array of object :")
        }
        else {
            console.log("array  :");
        }
    }
    else if (x.constructor == String) {
        console.log("String :");
    }
    else if (x.constructor == Number) {
        console.log(" Number:");
    }
    else if (x.constructor == Object) {
        console.log("Object :");
    }
    else if (x.constructor == Boolean) {
        console.log(" Boolean :");
    }
    else {
        console.log("cannot identify");
    }
    return x;
}
checkt()