import React, {forwardRef} from "react";
import PropTypes from "prop-types";
import {useService} from "@yosmy/service";
import {Container as ContainerSpec, Input as InputSpec} from "@yosmy/primitive-ui-spec";
import {Input as BaseInput} from "@yosmy/primitive-ui";
import Container, {compileMargin, compilePadding} from "./Container";
import Text from "./Text";

const Input = forwardRef(({
    margin, width,
    id, value, placeholder, focus, keyboard, length, multi, secure, capitalize, onChange, onEnter,
    start, end, help, error,
    ...props
}, ref) => {
    const theme = useService("theme");

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
                margin={theme.input.start.margin}
                padding={theme.input.start.padding}
                color={theme.input.start.color}
                {...start.props}
            />}
            <BaseInput
                ref={ref}
                id={id}
                flex={1}
                margin={compileMargin(theme.spacing, theme.input.entry.margin)}
                padding={compilePadding(theme.spacing, theme.input.entry.padding)}
                color={theme.input.entry.color}
                background={theme.input.entry.background}
                font={theme.input.entry.font}
                value={value}
                placeholder={placeholder}
                focus={focus}
                keyboard={keyboard}
                length={length}
                multi={multi}
                secure={secure}
                capitalize={capitalize}
                onChange={onChange}
                onEnter={onEnter}
            />
            {end && <end.type
                color={theme.input.entry.color}
                {...end.props}
            />}
        </Container>
        {help && <Text
            type="secondary"
            margin={{
                top: 0.5
            }}
        >
            {help}
        </Text>}
        {error && <Text
            type="error"
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
        </Text>}
    </Container>
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

export default Input;