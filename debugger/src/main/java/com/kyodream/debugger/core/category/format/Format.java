package com.kyodream.debugger.core.category.format;

public class Format {
    public static String doubleDot(String url){
        return url.replace("\"", "");
    }

    public static String doubleSlash(String str){
        String replaceAll = str.replaceAll("/+", "/");
        String result = replaceAll.replaceAll("\\+", "/");
        return result;
    }
}
