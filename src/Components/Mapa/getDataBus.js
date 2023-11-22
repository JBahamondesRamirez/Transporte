import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import firebaseConfig from "./connectFirebase.js";

const getPosition = () => {
    const [data, setData] = useState([])
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app)
    useEffect(() => {
        const dbRef = ref(database)
        const fetchData = () => {
            get(child(dbRef, 'UsuarioActivo/'))
                .then((snapshot) => {
                    var position = []
                    snapshot.forEach(childSnapshot => {
                        position.push(childSnapshot.val())
                    })
                    setData(position)
                })
                .catch((error) => {
                    console.error("Error al leer data:", error);
                });
        };
        fetchData()
        setInterval(fetchData, 1000);
    }, []);
    return {data}
}
export default getPosition;