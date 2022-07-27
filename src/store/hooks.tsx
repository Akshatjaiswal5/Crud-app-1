import { createTypedHooks } from "easy-peasy";
import ContactStoreModel from "./model";

const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<ContactStoreModel>();

export { useStoreActions, useStoreState, useStoreDispatch, useStore };
