import React from "react";
import { shallow, mount, render } from 'enzyme';
import Hours from "../src/components/Hours";
import { isTSAnyKeyword } from "@babel/types";

describe("Hours", () => {
    it("should be selectable by class", () => {
        expect(shallow(<Hours />).is(".service")).toBe(true);
    });
    it("should render without throwing an error", () => {
        expect(shallow(<Hours />).contains(<div className="service business-hours">
        <h3>Hours</h3>
        <table className="table-hours">
            <tbody>
                <tr><th scope="row"name="Mon">Mon</th><td><span value="0900">TODO</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                <tr><th scope="row"name="Tue">Tue</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                <tr><th scope="row"name="Wed">Wed</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                <tr><th scope="row"name="Thu">Thu</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                <tr><th scope="row"name="Fri">Fri</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                <tr><th scope="row"name="Sat">Sat</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                <tr><th scope="row"name="Sun">Sun</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
            </tbody>
        </table>
    </div> )).toBe(true);
    });
    it("should contain a single div", () => {
        expect(shallow(<Hours />).find("div").length).toBe(1);
    })
    it("should contain a single header", () => {
        expect(shallow(<Hours />).find("h3").length).toBe(1);
    })
    it("shoudl render HTML reading 'Hours' in the header", () => {
        expect(render(<Hours />).find("h3").text()).toEqual("Hours");
    });
}) ;