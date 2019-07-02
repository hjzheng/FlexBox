# FlexBox

```jsx
import FlexBox from "@jxz/flexbox";

<FlexBox
  flexDirection={"row-reverse"}
  justifyContent={"space-between"}
  width={"600px"}
>
  <FlexBox>
    <label>
      Title:{" "}
      <input
        name="title"
        value={form.title}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors.title}
    </label>
  </FlexBox>
  <FlexBox>
    <label>
      vegetarian:
      <input
        type="checkbox"
        name="vegetarian"
        checked={form.vegetarian}
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
  </FlexBox>
  <FlexBox width={"120px"}>
    <button>Add Recipe</button>
  </FlexBox>
</FlexBox>;
```
