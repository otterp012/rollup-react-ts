import { render } from "@testing-library/react";
import { Button } from "./index";

describe("button", () => {
  it("render", () => {
    render(<Button />);
    expect(1 + 2).toBe(3);
  });
});

// jest가 import와 같은 esm을 인식하지 못함
// 바벨이 이를 트랜스파일링 해줘야함

// Cannot find module 'react/jsx-runtime' from 'src/index.test.tsx'
// jest 쓰면서 생긴 오류
