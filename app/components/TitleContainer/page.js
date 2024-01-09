'use client';
import Image from "next/image";
import '../../styles/titlecontainer.css'
import TwoColumns from '../TwoColumns/page'


const TitleContainer = ({ data, classContainer, classHeading, classParagraph }) => {
    return (
        <>
            <div className={`${classContainer} column title-container maxwidth-1366`}>
                {data?.heading && <h1 className={classHeading}>{data?.heading}</h1>}
                {data?.paragraph && <p className={classParagraph}
                    dangerouslySetInnerHTML={{ __html: data?.paragraph}}
                />}
            </div>
        </>
    );
};

export default TitleContainer;