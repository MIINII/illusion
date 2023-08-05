import db from './../firebase/firebase';
import { setDoc } from 'firebase/firestore';
import { collection, doc, query, orderBy, getDocs } from 'firebase/firestore';

export const getIncome = async (id) => {
  try {
    const incomeData = collection(db, '/income');
    const incomeSnap = await getDocs(incomeData);
    const allIncome = incomeSnap.docs.map((doc) => doc.data());

    return allIncome;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
