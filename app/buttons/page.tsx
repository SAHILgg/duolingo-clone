import { Button } from "@/components/ui/ui/button";

const buttonspage=()=>{
    return(
         <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button> Default</Button>
            <Button variant={"primary"}>
                Primary
            </Button >
            <Button variant={"primaryOutline"}>Primary Outline</Button>
            <Button variant={"secondary"}>
                secondary
            </Button >
            <Button variant={"secondaryOutline"}>secondary Outline</Button>
            <Button variant={"danger"}>
                danger
            </Button >
            <Button variant={"dangerOutline"}>danger Outline</Button>
            <Button variant={"sidebar"}>
                sidebar
            </Button >
            <Button variant={"sidebarOutline"}>
                Sidebar Variant
            </Button>
            {/* <Button variant={"superoutline"}>super Outline</Button> */}
         </div>
    );
};
export default buttonspage