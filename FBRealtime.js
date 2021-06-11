import * as firebase from 'firebase';



//Add Operation
const Add = () => {
    const tempObj = {
        username, email
    }
    const incidentRef = firebase.database().ref('Incidents').push(tempObj);
    console.log("Key: ", incidentRef.key)
};


//Delete Operation
function Delete(key) {
    const pRef = firebase.database().ref(`Patrolling_Vehicles/${key}`);
    pRef.remove();
}


//Get Operation
function get() {
    const furnitureRef = firebase.database().ref('FurnitureData');
    furnitureRef.on('value', (datasnap) => {
        const fns = datasnap.val();
        const tempFns = [];
        for (let id in fns) {
            tempFns.push({ id, ...fns[id] });
        }
        setData(tempFns)
    });
}