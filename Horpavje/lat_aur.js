function sep(w) {
    w = w.replace(/([,\.]) /g, '$1')
    v = ['i','u','e','o','a', 'nn', ' ', ',', '\\.']
    for (var i in v) {
        var i_reg = RegExp('(' + v[i] + ')', 'g')
        w = w.replace(i_reg, '$1·')
    }
    // w = w.replace(/  /g, ' ', w)
    w = w.replace(/·+$/g, '');
    return w.split('·')
}

function lat_aur(l) {
    l = sep(l)
    a = ''
    for (var i in l) {
        a += l2a[l[i]]
    }
    return a
}

function aur_lat(a) {
    a = a.split()
    l = ''
    for (var i in a) {
        l += a2l[a[i]]
    }
    return l
}

function auto_lat_aur() {
    var f = document.getElementById('lat').value
    document.getElementById('aur').value = lat_aur(f)
}

function auto_aur_lat() {
    var f = document.getElementById('aur').value
    document.getElementById('lat').value = aur_lat(f)
}