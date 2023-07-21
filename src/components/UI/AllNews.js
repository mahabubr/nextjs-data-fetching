import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const AllNews = ({ allNews }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: 50, margin: "30px 0" }}>
        #TODAY HIGHLIGHT
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {allNews?.map((news) => (
          <Col key={news.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={news.image_url}
                  width={500}
                  height={200}
                  responsive
                  alt=""
                />
              }
            >
              <Meta title={news.title} />
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
              <p style={{ fontSize: 15 }}>
                {news.description.length > 100
                  ? news.description.slice(0, 70) + "..."
                  : news.description}
              </p>
              <Link href={`/news/${news.id}`}>
                <p
                  style={{
                    fontSize: 15,
                    marginTop: 20,
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px",
                    fontWeight: 300,
                    letterSpacing: 3,
                    textAlign: "center",
                  }}
                >
                  Keep Reading
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllNews;
