import React, {memo} from "react";
import PropTypes from "prop-types";
import {withTheme} from "@yosmy/style";
import {Container as ContainerSpec, Input as InputSpec} from "@yosmy/primitive-ui-spec";
import {Input as BaseInput} from "@yosmy/primitive-ui";
import Container, {compileMargin, compilePadding} from "./Container";
import Error from "./Error";
import {SecondaryText} from "./Text";

const Input = memo(({
    theme, margin, width,
    id, value, placeholder, focus, keyboard, length, multi, secure, capitalize, onChange,
    start, end, help, error,
    ...props
}) => {
    return <Container
        flow="column"
        align={{
            main: "flex-start",
        }}
        margin={margin}
        width={width}
        {...props} // key
    >
        <Container
            flow="row"
            align={{
                main: "flex-start",
                cross: "center"
            }}
            padding={theme.input.padding}
            border={{
                ...theme.input.border,
                fix: true // Fix radius
            }}
            background={theme.input.background}
        >
            {start && <start.type
                color={theme.input.entry.color}
                {...start.props}
            />}
            <BaseInput
                id={id}
                flex={1}
                margin={compileMargin(theme.spacing, theme.input.entry.margin)}
                padding={compilePadding(theme.spacing, theme.input.entry.padding)}
                color={theme.input.entry.color}
                background={theme.input.entry.background}
                size={theme.input.entry.size}
                value={value}
                placeholder={placeholder}
                focus={focus}
                keyboard={keyboard}
                length={length}
                multi={multi}
                secure={secure}
                capitalize={capitalize}
                onChange={onChange}
            />
            {end && <end.type
                color={theme.input.entry.color}
                {...end.props}
            />}
        </Container>
        {help && <SecondaryText
            margin={{
                top: 0.5
            }}
        >
            {help}
        </SecondaryText>}
        {error && <Error
            align={{
                main: "flex-start"
            }}
            margin={{
                top: 0.5
            }}
            padding={{
                top: 0.5,
                bottom: 0.5,
                right: 0.5,
            }}
        >
            {error}
        </Error>}
    </Container>
}, (prev, next) => {
    return (
        prev.value === next.value
        && prev.start === next.start
        && prev.end === next.end
    );
});

Input.propTypes = {
    margin: ContainerSpec.MarginProp,
    width: ContainerSpec.WidthProp,
    help: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    start: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]),
    end: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]),
    ...InputSpec.Props
};

// const renderHelp = (help) => {
//     return help && (!Array.isArray(help)
//         ? <Text>
//             {help}
//         </Text>
//         : help.map((line, i) => {
//             return <Text
//                 key={i}
//             >
//                 {line}
//             </Text>
//         })
//     )
// }

export default withTheme(Input);