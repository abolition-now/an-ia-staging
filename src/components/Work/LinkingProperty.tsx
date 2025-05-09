// @ts-nocheck

import {
  Homepage,
  PartOf,
  PrimitivesExternalWebResource,
  PrimitivesIIIFResource,
  Rendering,
  SeeAlso,
} from "@samvera/clover-iiif/primitives";

import { LocaleString } from "@hooks/useLocale";
import React from "react";
import { styled } from "@styles/stitches";

const WorkLinkingProperty = ({
  homepage,
  partOf,
  rendering,
  seeAlso,
}: {
  homepage?: PrimitivesExternalWebResource[];
  partOf?: PrimitivesIIIFResource[];
  rendering?: PrimitivesExternalWebResource[];
  seeAlso?: PrimitivesExternalWebResource[];
}) => {
  return (
    <StyledLinkingProperty>
      {rendering && (
        <dl style={{ display: "none" }}>
          <dt>{LocaleString("primitiveRendering") || "Alternate formats"}</dt>
          <dd>
            <Rendering rendering={rendering} />
          </dd>
        </dl>
      )}
      {seeAlso && (
        <dl style={{ display: "none" }}>
          <dt>{LocaleString("primitiveSeeAlso") || "See also"}</dt>
          <dd>
            <SeeAlso seeAlso={seeAlso} />
          </dd>
        </dl>
      )}
      {homepage && (
        <dl>
          <dt>{LocaleString("primitiveHomepage") || "Internet Archive"}</dt>
          <dd>
            <Homepage homepage={homepage} />
          </dd>
        </dl>
      )}
      {partOf && (
        <dl>
          <dt>{LocaleString("primitivePartOf") || "IIIF Collection"}</dt>
          <dd>
            <PartOf partOf={partOf} />
          </dd>
        </dl>
      )}
    </StyledLinkingProperty>
  );
};

export default WorkLinkingProperty;

const StyledLinkingProperty = styled("div", {
  dl: {
    margin: "0",

    dt: {
      padding: "$gr2 0 $gr1",
      fontWeight: "500",
      color: "var(--gray-10)",
      fontSize: "$gr2",
    },

    dd: {
      padding: "0 0 $gr1",

      a: {
        color: "var(--accent-11)",
        textDecoration: "none",
      },

      ul: {
        listStyle: "none",
        listStyleType: "none",
        margin: "0",
        paddingInlineStart: "0px",

        li: {
          listStyle: "none",
          listStyleType: "none",
        },
      },
    },
  },
});
