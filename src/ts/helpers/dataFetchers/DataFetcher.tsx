import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "../../..";
import { SidebarItemProps } from "../../components/Sidebar/SidebarItem";
import { v4 as uuidv4 } from "uuid";
import InboxIcon from "@mui/icons-material/Inbox";

export default class DataFetcher {
    static fetch<T>(
        api: string,
        defaultData: any
    ): Promise<AxiosResponse<ApiResponse<T>>> {
        if (api) {
            return new Promise((resolve) => {
                axios.get(api).then((result) => {
                    resolve(result);
                });
            });
        }
        // dummy items
        else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        data: defaultData,
                    } as any);
                }, 500);
            });
        }
    }
}
