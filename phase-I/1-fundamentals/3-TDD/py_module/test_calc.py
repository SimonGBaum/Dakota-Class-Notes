import pytest
from py_module.calc import mult_by_two

def test_01_mult_by_two_takes_in_4_outputs_8():
    assert mult_by_two(4) == 8

def test_02_mult_by_two_takes_in_str_4_outputs_error():
    assert mult_by_two('4') == "Improper Input!"
