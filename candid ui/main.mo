import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor Dbank {

  var value = 300;
  value := 400;

  let id = 2335243422;
  // Debug.print(debug_show (value));

  public func topUp(amount : Nat) {
    value += amount;
    Debug.print(debug_show (value));
  };

  // topUp();

  public func withDraw(amt : Nat) {
    value -= amt;
    Debug.print(debug_show (value));
  };

};

//steps:
// dfx canister id __Candid_UI
// http://127.0.0.1:4943/?canisterId=<CANDID-UI-CANISTER-IDENTIFIER>
// dfx canister id counter
