'use client';
import Image from 'next/image';
import '../../styles/pageheader.css';
import Link from 'next/link';
import TwoColumns from '../TwoColumns/page';

const PageHeader = ({ children, backgroundImage, data }) => {
  // const { heading, sub_heading, content, button_1, button_2 } = data;

  return (
    <>
      <section
        className="pageheader-container "
        style={{
          backgroundImage: `url(${data?.background_image})`,
          backgroundPosition: 'top',
        }}
      >
        <div className="pageheader-container-layer">
          <div className="flex column pageheader-content maxwidth-1366">
            {data?.heading && (
              <div className="w-50 w-100-tablet">
                <h1
                  className="fs-48 fw-800 lh-48 fs-tablet-30 lh-tablet-36 color-white-v2"
                  //style={{ color: `${heading.color}`, fontSize: `${heading.font_size}`, fontWeight: `${heading.font_weight}`, lineHeight: `${heading.line_height}` }}
                  dangerouslySetInnerHTML={{ __html: data?.heading.text }}
                />
                <h1
                  className="fs-48 fw-800 lh-48 fs-tablet-30 lh-tablet-36 color-yellow"
                  //style={{ color: `${heading.color}`, fontSize: `${heading.font_size}`, fontWeight: `${heading.font_weight}`, lineHeight: `${heading.line_height}` }}
                  dangerouslySetInnerHTML={{ __html: data?.heading.extra_text }}
                />
              </div>
            )}
            {data?.sub_heading && (
              <h2
                className=" w-50 w-100-tablet"
                //style={{ color: `${sub_heading.color}`, fontSize: `${sub_heading.font_size}`, fontWeight: `${sub_heading.font_weight}`, lineHeight: `${sub_heading.line_height}` }}
                dangerouslySetInnerHTML={{ __html: data?.sub_heading.text }}
              />
            )}
            {data?.content && (
              <p
                className="fs-20 fw-400 lh-28 fs-tablet-16 w-50 w-100-tablet color-white-v2"
                //style={{ color: `${content.color}`, fontSize: `${content.font_size}`, fontWeight: `${content.font_weight}`, lineHeight: `${content.line_height}` }}
                dangerouslySetInnerHTML={{ __html: data?.content.text }}
              />
            )}
            {data?.button_1 && (
              <div className="buttons-container text-center flex w-50 w-100-tablet">
                <Link href={data?.button_1.button_link}>
                  <div
                    style={{
                      background: `${data?.button_1.button_color}`,
                      color: `${data?.button_1.button_textcolor}`,
                    }}
                    className="pageheader-button_1 rounded-4"
                  >
                    {data?.button_1.button_text}
                  </div>
                </Link>
                {/* {data?.button_2 && (
                  <Link href={data?.button_2.button_link}>
                    <div
                      style={{
                        background: `${data?.button_2.button_color}`,
                      }}
                      className="pageheader-button_2 rounded-4"
                    >
                      {data?.button_2.button_text}
                    </div>
                  </Link>
                )} */}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
