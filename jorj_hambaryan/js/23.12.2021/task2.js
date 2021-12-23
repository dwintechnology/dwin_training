const obj = {
    name: 'jorj',
    surname: 'hambaryan',
    growth: '182sm'

};

function getKey(searchObj, searchKey) {
    let key;
    for (key in searchObj) {
        if (key == searchKey) {
            console.log(Boolean(1));
            break;
        }
    }
    if (key !== searchKey) {
        console.log(Boolean(0));
    }
}

getKey(obj, 'name'); 