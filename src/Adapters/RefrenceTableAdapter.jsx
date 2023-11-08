import { Util } from '@d-lift/core';
import { AbstractRefrenceTableAdapter } from '@d-lift/core';
import { AppContext } from '@d-lift/core';
import { Constants } from '@d-lift/core';

/**
 * Refrence Table Adapter to define and massage Refrence Table Data
 */
class RefrenceTableAdapter extends AbstractRefrenceTableAdapter {
    /**
     * How description key should be identified for each locale in refrence table data
     *
     * @param {{locale : "Locale Name", tableName: "Refrence Table Name"}} refTableObj
     */
    defineDescriptionKey(refTableObj) {
        let localeSuffix = 'ENGLISH';
        switch (refTableObj.locale) {
            case Constants.LOCALE.ESPANOL.CODE:
                localeSuffix = 'SPANISH';
                break;
            case Constants.LOCALE.ENGLISH.CODE:
            default:
                localeSuffix = 'ENGLISH';
                break;
        }
        return 'DESC' + localeSuffix;
    }

    /**
     * How refrence table code key should be identified for each locale in refrence table data
     *
     * @param {{locale : "Locale Name", tableName: "Refrence Table Name"}} refTableObj
     */
    defineCodeKey(refTableObj) {
        return 'CODE';
    }

    /**
     * Asynchronous method to invoke refrence table service and massage response and return a JSON object 
     * with following structure.
     * For more info: http://localhost:1800/#/Adapter?id=refrence-table-adapter
    ```json
    {
        "TABLE_NAME_1" : [
            {
                "Description Key for Locale 1" : "Description",
                "Description Key for Locale 2" : "Description", 
                "Code Key" : "Code"
            }
        ],
        "TABLE_NAME_2" : [
            {
                "Description Key for Locale 1" : "Description",
                "Description Key for Locale 2" : "Description", 
                "Code Key" : "Code"
            }
        ] 
    }
    ```
     * @param {[]} reftableList
     * @summary Define Refrence Table Invoke call. It must be async nd return promise. All HTTP Calls in this 
     * method should define with await.
     * @tutorial  http://localhost:1800/#/Adapter?id=refrence-table-adapter 
     */
    invoke = async reftableList => {
        let refTableServiceResponse = await Util.HTTP.get(
            this.refrenceTableEndpoint + AppContext.pagedetails.getPageName() + '.json',
        );
        console.log('Refrence table list: ', reftableList);
        return refTableServiceResponse;
    };
}

/**
 * Refrence Table Adapter to define and massage Refrence Table Data
 */
const refTableAdapter = new RefrenceTableAdapter();
export default refTableAdapter;
