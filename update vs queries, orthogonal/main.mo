import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";

actor Dbank {

  stable var value = 300;

  let id = 2335243422;

  public func topUp(amount : Nat) {
    value += amount;
    Debug.print(debug_show (value));
  };

  public func withDraw(amt : Nat) {
    let temp : Int = value -amt;
    if (temp >= 0) {
      value -= amt;
      Debug.print(debug_show (value));
    } else {
      Debug.print("Amount insufficient");
    };
  };

  public query func checkBalance() : async Nat {
    return value;
  };

};

//steps
// dfx canister id __Candid_UI
// http://127.0.0.1:4943/?canisterId=<CANDID-UI-CANISTER-IDENTIFIER>
// dfx canister id counter
