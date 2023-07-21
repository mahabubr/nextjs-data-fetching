import RootLayout from "@/components/Layouts/RootLayout";
import { useForm } from "react-hook-form";

const CreateNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("/api/news", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.insertedId) {
          alert("News successfully created");
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "60%", margin: "50px auto" }}
      >
        <input
          {...register("id", { required: true })}
          placeholder="id"
          style={{ width: "100%", padding: "4px 8px", marginTop: 10 }}
        />
        <input
          {...register("title", { required: true })}
          placeholder="title"
          style={{ width: "100%", padding: "4px 8px", marginTop: 10 }}
        />
        <input
          {...register("description", { required: true })}
          placeholder="description"
          style={{ width: "100%", padding: "4px 8px", marginTop: 10 }}
        />
        <input
          {...register("author", { required: true })}
          placeholder="author"
          style={{ width: "100%", padding: "4px 8px", marginTop: 10 }}
        />
        <input
          {...register("release_date", { required: true })}
          placeholder="release_date"
          type="date"
          style={{ width: "100%", padding: "4px 8px", marginTop: 10 }}
        />
        <input
          {...register("category", { required: true })}
          placeholder="category"
          style={{ width: "100%", padding: "4px 8px", marginTop: 10 }}
        />
        <input
          {...register("comment_count", { required: true })}
          placeholder="comment_count"
          style={{ width: "100%", padding: "4px 8px", marginTop: 10 }}
        />
        <input
          {...register("image_url", { required: true })}
          placeholder="image_url"
          style={{ width: "100%", padding: "4px 8px", marginTop: 10 }}
        />
        <input
          type="submit"
          value="Submit"
          style={{ width: "100%", padding: "4px 8px", marginTop: 10 }}
        />
      </form>
    </div>
  );
};

export default CreateNews;

CreateNews.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
