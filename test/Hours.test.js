import jest from "jest";
import Hours from "../src/components/Hours.jsx";

//test to see that module assigns a function to Hours

test("should declare function Hours", () => {
    expect(typeof Hours).toBe(`function`);
})
