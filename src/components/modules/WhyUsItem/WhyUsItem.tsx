

interface Props {
    id: number,
    title: string,
    desc: string,
    icon: string,
}
function FeatureItem({title, desc, icon}: Props) {
    return (
        <div>
            <div className={"flex flex-col justify-center items-center text-center border border-amber-500 px-2 gap-5 py-4 mx-2 mx-4 shadow-xl font-[Tanha] relative bg-[#FFF9F1]"}>
                <div>
                    <img
                        src={icon}
                    />
                </div>
                <div>

                    <h6 className={"text-amber-950 text-[20px] font-bold"}>{title} </h6>
                    <p className={"text-[15px] mb-2"}>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FeatureItem;