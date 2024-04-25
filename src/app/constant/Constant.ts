export class Constant{
    // public static phpServiceURL = "https://www.trinityapplab.in/AzurePower/api/";
    public static phpServiceURL = "/AzurePower/api/";
    public static SUCCESSFUL_STATUS_CODE = "200";
    public static SUNRISE_PRIVATE_KEY = "AZUREPOWERPRIVATEKEY";
    public static STORE_KEY =  'lastAction';
    public static CHECK_INTERVAL = 15000; // in ms
    public static MINUTES_UNTIL_AUTO_LOGOUT = 10; // in mins
    public static returnServerErrorMessage(serviceName:string):string{
        return "Server error while invoking "+serviceName+ " service";
    }

}