
from django.core.exceptions import ValidationError
from django.test import TestCase

from .models import Move


class MoveTests(TestCase):

    def test_01_create_a_move(self):
        psychic = Move(
            name="Psychic",
            pp=10,
        )

        psychic.full_clean()
        psychic.save()

        self.assertIsInstance(psychic, Move)
        self.assertIsNotNone(psychic.id)
        self.assertEqual(Move.objects.count(), 1)

    def test_02_create_a_move_fail(self):
        wing_attack = Move(
            name="wing 4ttack",
            pp=25,
        )

        with self.assertRaises(ValidationError):
            wing_attack.full_clean()