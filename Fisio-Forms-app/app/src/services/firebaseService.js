import firebase from "firebase";
export class FirebaseService {
  async signUpAsync(email, password) {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password);
    } catch (error) {}
  }
}
