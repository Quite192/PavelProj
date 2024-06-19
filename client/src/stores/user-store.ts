// @ts-nocheck
import { makeAutoObservable } from "mobx";

class UserStore {
  outh = JSON.parse(localStorage.getItem("auth")) || false;

  constructor() {
    makeAutoObservable(this);
  }

  authenticate() {
    this.outh = true;
    localStorage.setItem("auth", JSON.stringify(true));
    return true;
  }

  signout() {
    this.outh = false;
    localStorage.setItem("auth", JSON.stringify(false));
  }

  subscribe(callback) {
    this._callback = callback;
  }

  set outh(value) {
    this._outh = value;
    if (this._callback) this._callback(value);
  }

  get outh() {
    return this._outh;
  }
}

export default new UserStore();
