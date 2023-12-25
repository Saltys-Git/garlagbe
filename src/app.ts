import express,  { Request, Response } from 'express';
import {auth, db} from "../lib/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const app = express();
app.use(express.json());


app.post('/login', (req, res) => {
    const body = req.body
    signInWithEmailAndPassword(auth, body.email, body.password)
        .then((userCredential) => {
            const user = userCredential.user;
            return res.status(200).json({"user": user})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return res.status(400).json({"errorCode": errorCode, "errorMessage": errorMessage})
        });
})

app.post('/register', (req, res) => {
    console.log(req.body)
    const body = req.body

    createUserWithEmailAndPassword(auth, body.email, body.password)
        .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "Users", user.uid), {
                name: body.name,
                email: body.email
            }).then(r => {
                return res.status(200).json({"user": user})
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return res.status(400).json({"errorCode": errorCode, "errorMessage": errorMessage})
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return res.status(400).json({"errorCode": errorCode, "errorMessage": errorMessage})
        });

})


app.listen(8000, () =>{
    console.log("Application is running")
})