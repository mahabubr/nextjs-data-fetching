import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";

const NewsDetails = ({ news }) => {
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div>
            <Image
              src={news.image_url}
              width={500}
              height={300}
              responsive
              alt=""
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1 style={{fontSize: 25}}>{news.title}</h1>
            <div
              className="line"
              style={{
                height: 5,
                margin: "20px 0",
                background: "#000",
                width: "100%",
              }}
            ></div>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "gray",
                margin: "10px 0",
                fontSize: "12px",
              }}
            >
              <span>{news.release_date}</span>
              <span>{news.comment_count}</span>
              <span>{news.category}</span>
            </p>
            <p style={{ fontSize: 20 }}>{news.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`http://localhost:5000/news`);
//   const newses = await res.json();

//   const paths = newses.map((news) => ({
//     params: {
//       newsId: news.id,
//     },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const { params } = context;

//   const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
//   const data = await res.json();

//   return {
//     props: {
//       news: data,
//     },
//   };
// };


export const getServerSideProps = async (context) => {
    const { params } = context;
  
    const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
    const data = await res.json();
  
    return {
      props: {
        news: data,
      },
    };
  };