package com.kyodream.debugger.core.analyse;

import com.sun.jdi.*;

import java.util.HashMap;
import java.util.Map;

public class MapAnalyse {

    /**
     * 支持LinkHash/HashMap
     * @param objectReference
     * @return
     */
    public static Map<ObjectReference, ObjectReference> getHashMapObject(ObjectReference objectReference) {
        HashMap<ObjectReference, ObjectReference> result = new HashMap<>();
        ArrayReference nodeList = (ArrayReference) Utils.getFieldObject(objectReference, "table");
        if(nodeList == null){
            return result;
        }
        for (Value elemKv : nodeList.getValues()) {
            if (elemKv == null) {
                continue;
            }
            ObjectReference elemKvObject = (ObjectReference) elemKv;
            while (true) {
                ObjectReference keyObject = Utils.getFieldObject(elemKvObject, "key");
                ObjectReference valueObject = Utils.getFieldObject(elemKvObject, "value");
//                某个节点可能链表的结构，需要判断是否存在next
                ObjectReference next = Utils.getFieldObject(elemKvObject, "next");
                result.put(keyObject, valueObject);
                if(next != null){
                    elemKvObject = next;
                }else{
                    break;
                }
            }
        }
        return result;
    }

    public static Map<ObjectReference, ObjectReference> getUnmodifiableMap(ObjectReference objectReference){
        ObjectReference m = Utils.getFieldObject(objectReference, "m");
        return getHashMapObject(m);
    }

    public static Map<ObjectReference, ObjectReference> getConcurrentHashMapObject(ObjectReference objectReference){
        HashMap<ObjectReference, ObjectReference> result = new HashMap<>();
        ArrayReference nodeList = (ArrayReference) Utils.getFieldObject(objectReference, "table");
        if(nodeList == null){
            return result;
        }
        for (Value elemKv : nodeList.getValues()) {
            if (elemKv == null) {
                continue;
            }
            ObjectReference elemKvObject = (ObjectReference) elemKv;
            ObjectReference keyObject = Utils.getFieldObject(elemKvObject, "key");
            ObjectReference valueObject = Utils.getFieldObject(elemKvObject, "val");
            result.put(keyObject, valueObject);
        }
        return result;
    }
}
