import * as firebase from 'firebase';


//Add Operation
function Add(){
    const db = firebase.firestore();
    db.collection("Users").add(user)
    .then(function(docRef) {
          alert("Account Successfully Created",docRef.id)
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    }); 
}

//SignUp
function userSignUp() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            const user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: username,
                email,
                phoneNumber: phoneNumber,
            })
            // addUser()
        })
        .catch(error => {
            Alert.alert(error.message)
        })
}

//SignIn
function userSignIn() {
    setisLoad(true)
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            // _storeData()
            navigation.replace("Home")
        })
        .catch((error) => {
            Alert.alert("Invalid Username or Password")
        });
}

//Get Operation
function FetchCategories() {
    const db = firebase.firestore();
    db.collection("Categories").get().then((querySnapshot) => {
        const tempFns = [];
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            const data = doc.data();
            const obj = {
                id,
                title: data.title
            }
            tempFns.push(obj);
        });
        setCategories(tempFns)
    });
}

//Fetching Particular Id:
db.collection("Categories").doc(docid).get();


//Update Operation
function Update(id) {
    const db = firebase.firestore();
    db.collection("FurnitureData").doc(id).update({
        title: title,
        price: price,
        description: description,
        colors: colors,
        img: img,
        images: images,
    });
}


//Delete Operation 
function Delete(id) {
    const db = firebase.firestore();
    db.collection("FurnitureData").doc(id).delete()
        .then(function () {
            alert("Document successfully deleted!");
        }).catch(function (error) {
            alert("Error removing document ");
        });
}

