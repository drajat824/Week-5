import React from "react";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";
const Loading = () => {
  return (<>
    <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
      <div class="d-flex align-items-center">
        {/* <img src="/assets/images/1.png" height="56px" width="56px" /> */}
        <RectShape
          style={{ width: 75, height: 75, borderRadius: 10 }}
          color="#f0f0f0"
        />
        <div class="pl-3">
          <TextBlock
            rows={1}
            style={{
              height: 50,
              width: 100,
              marginTop: 25,
            }}
            color="#f0f0f0"
          />
          <TextBlock
            rows={1}
            style={{
              height: 50,
              width: 200,
            }}
            color="#f0f0f0"
          />
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
      <div class="d-flex align-items-center">
        {/* <img src="/assets/images/1.png" height="56px" width="56px" /> */}
        <RectShape
          style={{ width: 75, height: 75, borderRadius: 10 }}
          color="#f0f0f0"
        />
        <div class="pl-3">
          <TextBlock
            rows={1}
            style={{
              height: 50,
              width: 100,
              marginTop: 25,
            }}
            color="#f0f0f0"
          />
          <TextBlock
            rows={1}
            style={{
              height: 50,
              width: 200,
            }}
            color="#f0f0f0"
          />
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
      <div class="d-flex align-items-center">
        {/* <img src="/assets/images/1.png" height="56px" width="56px" /> */}
        <RectShape
          style={{ width: 75, height: 75, borderRadius: 10 }}
          color="#f0f0f0"
        />
        <div class="pl-3">
          <TextBlock
            rows={1}
            style={{
              height: 50,
              width: 100,
              marginTop: 25,
            }}
            color="#f0f0f0"
          />
          <TextBlock
            rows={1}
            style={{
              height: 50,
              width: 200,
            }}
            color="#f0f0f0"
          />
        </div>
      </div>
    </div>
  </>);
};

export default Loading